from django.db import models
from django.contrib.auth.models import User

class Customer(models.Model):
    STATUS_CHOICES = [('Nuevo', 'Nuevo'), ('Activo', 'Activo'), ('Inactivo', 'Inactivo')]
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='customers')
    name = models.CharField(max_length=120)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=20, blank=True)
    city = models.CharField(max_length=80, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Nuevo')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
