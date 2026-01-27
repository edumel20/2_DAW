
from teams.serializers import TeamSerializer
from .models import Player
from .serializers import PlayerSerializer
from django.http import JsonResponse
import json
from datetime import date
from teams.models import Team
from decimal import Decimal
from shared.decorators import require_get_method, require_post_method, validate_json_body,  require_json_fields, token_checker

@require_get_method
def player_list(request):
    players = Player.objects.all()
    # sacar string de url
    if position_query := request.GET.get('position'):
        #filtrar jugadores con position igual a string url
        players = players.filter(position=position_query)
    if team_query := request.GET.get('team'):
        players = players.filter(team__slug=team_query)
    serializer = PlayerSerializer(players, request=request)
    return serializer.json_response()

@require_get_method
def player_detail(request, player_slug):
    try:
        player = Player.objects.get(slug=player_slug)
    except Player.DoesNotExist:
        return JsonResponse({'error': 'Player not found'}, status=404)
    serializer = PlayerSerializer(player,request=request)
    return serializer.json_response()

@require_post_method    
@validate_json_body
@require_json_fields('name', 'slug', 'position', 'birth-date', 'market-value', 'team-slug')
@token_checker
def add_player(request):
    json_data = json.loads(request.body)
    if json_data['position'] not in Player.Position:
        return JsonResponse({'error': 'Invalid position'}, status=400)
    try:
        birth_date = date.fromisoformat(json_data['birth-date'])
    except ValueError:
        return JsonResponse({'error': 'Invalid birth date'},  status=400)
    try:
        team = Team.objects.get(slug=json_data['team-slug'])
    except Team.DoesNotExist:
        return JsonResponse({'error': 'Team not found'}, status=404)
    if Player.objects.filter(slug=json_data['slug']).exists():
        return JsonResponse ({'error': 'Player already exists'}, status=400)
    player = Player.objects.create(
        name=json_data['name'],
        slug = json_data['slug'],
        position = json_data['position'],
        birth_date = birth_date,
        market_value = json_data['market-value'],
        team = team,
    )
    return JsonResponse({'id': player.pk})

@require_post_method    
@validate_json_body
@require_json_fields('player-slug', 'team-slug')
@token_checker
def transfer_player(request):
    json_data = json.loads(request.body)
    try:
        player = Player.objects.get(slug=json_data['player-slug'])
    except Player.DoesNotExist:
        return JsonResponse({'error': 'Player not found'}, status=404)
    try:
        new_team = Team.objects.get(slug=json_data['team-slug'])
    except Team.DoesNotExist:
        return JsonResponse({'error':'Team not found'}, status=404)
    if player.team.league != new_team.league:
        player.market_value += player.market_value * Decimal(0.1)
    player.team = new_team
    player.save()
    return JsonResponse({'id': player.pk})