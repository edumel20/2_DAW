from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
@require_POST
def auth(request):
    payload = json.loads(request.body)
    if user := authenticate(
        username=payload['username'], password=payload['password']
    ):
        return JsonResponse({'token': user.token.key})
    return JsonResponse({'error': 'Invalid credentials'}, status=401)