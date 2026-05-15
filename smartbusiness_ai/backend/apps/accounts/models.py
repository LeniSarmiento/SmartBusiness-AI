from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    ROLE_CHOICES = [
        ('admin', 'Administrador'),
        ('employee', 'Empleado'),
        ('viewer', 'Visualizador'),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    business_name = models.CharField(max_length=120, default='SmartBusiness AI')
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='admin')
    phone = models.CharField(max_length=20, blank=True)
    city = models.CharField(max_length=80, blank=True)

    def __str__(self):
        return f'{self.user.username} - {self.role}'
