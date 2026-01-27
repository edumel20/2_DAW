from django.db import models

class Player(models.Model):
    class Position(models.TextChoices):
        GOALKEEPER = 'G'
        DEFENDER = 'D'
        MIDFIELDER = 'M'
        FOWARD = 'F'

    name = models.CharField(max_length=256, unique=True)
    slug = models.SlugField(max_length=256, unique=True)
    position = models.CharField(choices=Position)
    birth_date = models.DateField()
    market_value = models.DecimalField(max_digits=11, decimal_places=2)
    photo = models.ImageField(
        upload_to ='players/photos',
        default ='players/photos/default.png',
        blank=True
    )
    team = models.ForeignKey(
        'teams.Team',
        related_name='players',
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )

    def __str__(self):
        return self.name
    