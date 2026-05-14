from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=120)
    category = models.CharField(max_length=80)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField(default=0)
    min_stock = models.PositiveIntegerField(default=5)
    created_at = models.DateTimeField(auto_now_add=True)

    def stock_status(self):
        if self.stock <= self.min_stock:
            return 'Stock bajo'
        return 'Disponible'

    def __str__(self):
        return self.name