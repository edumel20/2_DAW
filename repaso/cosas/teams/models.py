from django.db import models

class Team(models.Model):
    name = models.CharField(unique=True, max_length=255)
    slug = models.SlugField(unique=True)
    shield = models.ImageField(upload_to='teams/shields', default='teams/shields/default.png', blank=True, null=True)
    class League(models.TextChoices):
        LALIGA = 'L'
        PREMIER = 'P'
        CALCIO = 'C'
        BUNDESLIGA = 'B'
    league = models.CharField(
        max_length=1,
        choices=League,
    )

    def __str__(self):
        return self.name