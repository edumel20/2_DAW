from django.contrib import admin

from .models import Token


@admin.register(Token)
class TokenAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'user',
        'key',
        'created_at',
    )
    search_fields = ('pk', 'key', 'user')
