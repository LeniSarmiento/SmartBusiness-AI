from django.db import models
from django.contrib.auth.models import User
from apps.business.models import Customer
from apps.inventory.models import Product

class Sale(models.Model):
    PAYMENT_CHOICES = [
        ('Yape', 'Yape'), ('Plin', 'Plin'), ('Efectivo', 'Efectivo'),
        ('Transferencia', 'Transferencia'), ('Tarjeta', 'Tarjeta'),
    ]
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sales')
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True, blank=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, blank=True)
    quantity = models.PositiveIntegerField(default=1)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=50, choices=PAYMENT_CHOICES, default='Yape')
    note = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Venta #{self.id}'
