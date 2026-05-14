from rest_framework import viewsets
from .models import Sale
from .serializers import SaleSerializer

class SaleViewSet(viewsets.ModelViewSet):
    queryset = Sale.objects.select_related('customer', 'product').all().order_by('-created_at')
    serializer_class = SaleSerializer