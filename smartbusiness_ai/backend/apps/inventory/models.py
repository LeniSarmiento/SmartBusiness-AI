from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='products')
    name = models.CharField(max_length=120)
    category = models.CharField(max_length=80)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField(default=0)
    min_stock = models.PositiveIntegerField(default=5)
    created_at = models.DateTimeField(auto_now_add=True)

    def stock_status(self):
        return 'Stock bajo' if self.stock <= self.min_stock else 'Disponible'

    def __str__(self):
        return self.name
