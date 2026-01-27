from django.contrib import admin

from .models import Player

@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'name',
        'slug',
        'position',
        'birth_date',
        'market_value',
        'team',
    )
    search_fields = ('pk', 'name', 'position',)