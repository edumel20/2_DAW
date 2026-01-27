from django.contrib import admin
from .models import Player

@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'slug',
        'position',
        'birth_date',
        'market_value',
        'photo',
        'team'
    )