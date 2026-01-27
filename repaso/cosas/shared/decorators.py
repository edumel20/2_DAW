from django.http import JsonResponse
import json
from users.models import Token
import re
#405 METHOD NOT ALLOWED
def require_get_method(func):
    def wrapper(*args, **kwargs):
        request = args[0]
        if request.method != 'GET':
            return JsonResponse({'error': 'Method not allowed'}, status=405)
        return func(*args, **kwargs)
    return wrapper

def require_post_method(func):
    def wrapper(*args, **kwargs):
        request = args[0]
        if request.method != 'POST':
            return JsonResponse({'error': 'Method not allowed'}, status=405)
        return func(*args, **kwargs)
    return wrapper

#400 INVALID JSON BODY
def validate_json_body(func):
    def wrapper(*args, **kwargs):
        request = args[0]
        try:
            json.loads(request.body)
        except json.JSONDecodeError:
           return JsonResponse({'error': 'Invalid JSON body'}, status=400)
        return func(*args, **kwargs)
    return wrapper

#400 MISSING FIELDS
def require_json_fields(*required_fields):
    def decorator(func):
        def wrapper(*args, **kwargs):
            request = args[0]
            json_body = json.loads(request.body)
            missing_fields = [field for field in required_fields if field not in json_body]
            if missing_fields:
                return JsonResponse(
                    {'error': 'Missing required fields'},
                    status=400
                )
            return func(*args, **kwargs)
        return wrapper
    return decorator

# 401 Unregistered token & 400 Invalid token
def token_checker(func):
    def wrapper(*args, **kwargs):
        request = args[0]
        TOKEN_PATTERN = r'^Bearer ([a-fA-F\d]{8}(?:-[a-fA-F\d]{4}){3}-[a-fA-F\d]{12})$'
        auth_header = request.headers.get('Authorization')
        if not auth_header or not (token_match := re.fullmatch(TOKEN_PATTERN, auth_header)):
            return JsonResponse({'error': 'Invalid authentication token'}, status=400)
        token_key = token_match[1]
        try:
            Token.objects.get(key=token_key)
        except Token.DoesNotExist:
            return JsonResponse({'error': 'Unregistered authentication token'}, status=401)
        return func(*args, **kwargs)
    return wrapper
