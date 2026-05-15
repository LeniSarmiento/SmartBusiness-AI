from rest_framework import viewsets
from .models import Sale
from .serializers import SaleSerializer

class SaleViewSet(viewsets.ModelViewSet):
    serializer_class = SaleSerializer

    def get_queryset(self):
        return Sale.objects.filter(owner=self.request.user).select_related('customer', 'product').order_by('-created_at')

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
