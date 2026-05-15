from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    status = serializers.CharField(source='stock_status', read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'category', 'price', 'stock', 'min_stock', 'status', 'created_at']
        read_only_fields = ['id', 'status', 'created_at']
