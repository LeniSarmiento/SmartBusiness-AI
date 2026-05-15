from rest_framework import serializers
from .models import Sale

class SaleSerializer(serializers.ModelSerializer):
    customer_name = serializers.CharField(source='customer.name', read_only=True)
    product_name = serializers.CharField(source='product.name', read_only=True)

    class Meta:
        model = Sale
        fields = ['id', 'customer', 'customer_name', 'product', 'product_name', 'quantity', 'total', 'payment_method', 'note', 'created_at']
        read_only_fields = ['id', 'customer_name', 'product_name', 'created_at']
