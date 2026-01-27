import json

from django.http import JsonResponse

from shared.decorators import require_http_methods
from users.decorators import auth_required
from teams.models import Team
from users.models import Token

from .models import Player
from .serializers import PlayerSerializer


@require_http_methods('GET')
def player_list(request):
    players = Player.objects.all()
    position_slug = request.GET.get('position')
    league_slug = request.GET.get('league')
    if position_slug:
        players = players.filter(slug=position_slug)
    if league_slug:
        players = players.filter(slug=league_slug)
    serializer = PlayerSerializer(players, request=request)
    return serializer.json_response()


@require_http_methods('GET')
def player_detail(request, player_slug):
    try:
        player = Player.objects.get(slug=player_slug)
    except Player.DoesNotExist:
        return JsonResponse({'error': 'Player not found'})
    serializer = PlayerSerializer(player, request=request)
    return serializer.json_response()


@require_http_methods('POST')
@auth_required
def add_player(request):
    try:
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON body'}, status=400)

    # Validate required fields
    required_fields = ['name', 'slug', 'position', 'birth_date', 'market_value']
    missing = [f for f in required_fields if f not in data]
    if missing:
        return JsonResponse({'error': 'Missing required fields'}, status=400)

    # Validate position
    if data['position'] not in dict(Player.Position.choices):
        return JsonResponse({'error': 'Invalid position'}, status=400)

    # Parse and convert values
    try:
        birth_date = Player.birth_date.field.fromisoformat(data['birth_date'])
        market_value = float(data['market_value']) * 1000000
    except (ValueError, TypeError):
        return JsonResponse({'error': 'Invalid birth date'}, status=400)

    # Get team if provided
    try:
        team = Team.objects.filter(slug=data.get('team_slug')).first() if data.get('team_slug') else None
    except Team.DoesNotExist:
        return JsonResponse({'error': 'Team not found'})
    
    player = Player.objects.create(
        name=data['name'],
        slug=data['slug'],
        position=data['position'],
        birth_date=birth_date,
        market_value=market_value,
        team=team,
    )

    return PlayerSerializer(player, request=request).json_response()


@require_http_methods('POST')
@auth_required
def transfer_player(request):
    try:
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON body'}, status=400)

    # Validate required fields
    if 'player_slug' not in data or 'new_team_slug' not in data:
        return JsonResponse({'error': 'Missing required fields'}, status=400)

    # Get player
    try:
        player = Player.objects.get(slug=data['player_slug'])
    except Player.DoesNotExist:
        return JsonResponse({'error': 'Player not found'}, status=404)

    # Get new team
    try:
        new_team = Team.objects.get(slug=data['new_team_slug'])
    except Team.DoesNotExist:
        return JsonResponse({'error': 'Team not found'}, status=404)

    # Check if leagues are different (increase market value by 10%)
    if player.team and player.team.league != new_team.league:
        player.market_value = player.market_value * Decimal('1.10')

    # Update player's team
    player.team = new_team
    player.save()

    return PlayerSerializer(player, request=request).json_response()

