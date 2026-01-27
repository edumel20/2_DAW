from django.db import models

class Team(models.Model):
    class League(models.TextChoices):
        LALIGA = 'L'
        PREMIER = 'P'
        CALCIO = 'C'
        BUNDESLIGA = 'B'
    
    name = models.CharField(max_length=256, unique=True)
    slug = models.SlugField(max_length=256, unique=True)
    league = models.CharField(choices=League)
    shield = models.ImageField(
        upload_to='teams/shields/',
        default='teams/shields/default.png',
        blank=True,
        null=True
    )

    def __str__(self):
        return self.name