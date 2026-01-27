from django.db import models

class Player(models.Model):
    name = models.CharField(unique=True, max_length=255)
    slug = models.SlugField(unique=True)
    birth_date = models.DateField()
    market_value = models.DecimalField(max_digits=11, decimal_places=2)
    photo = models.ImageField(upload_to='players/photos', default='players/photos/default.png', blank=True)
    team = models.ForeignKey('teams.Team', related_name='teams', on_delete=models.CASCADE, blank=True, null=True)
    class Position(models.TextChoices):
        GOALKEEPER = 'G'
        DEFENDER = 'D'
        MIDFIELDER = 'M'
        FORWARD = 'F'
    position = models.CharField(
        max_length=1,
        choices=Position,
    )

    def __str__(self):
        return self.name