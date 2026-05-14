from django.db import models
from apps.business.models import Customer
from apps.inventory.models import Product

class Sale(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True, blank=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    quantity = models.PositiveIntegerField(default=1)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=50, default='Efectivo')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Venta #{self.id}'