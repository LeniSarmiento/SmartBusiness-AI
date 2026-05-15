from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from apps.business.models import Customer
from apps.inventory.models import Product
from apps.sales.models import Sale

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def dashboard_summary(request):
    user = request.user
    sales = Sale.objects.filter(owner=user)
    customers = Customer.objects.filter(owner=user)
    products = Product.objects.filter(owner=user)

    total_sales = sum(float(sale.total) for sale in sales)
    low_stock = products.filter(stock__lte=5).count()

    recommendation = 'El negocio tiene actividad estable.'
    if total_sales >= 3000:
        recommendation = 'Las ventas muestran buen crecimiento. Conviene reforzar los productos más vendidos.'
    if low_stock > 0:
        recommendation = 'Hay productos con stock bajo. Se recomienda reponer inventario pronto.'

    return Response({
        'total_sales': total_sales,
        'sales_count': sales.count(),
        'customers_count': customers.count(),
        'products_count': products.count(),
        'low_stock': low_stock,
        'recommendation': recommendation,
        'monthly_sales': [
            {'month': 'Ene', 'sales': 1200},
            {'month': 'Feb', 'sales': 1800},
            {'month': 'Mar', 'sales': 1500},
            {'month': 'Abr', 'sales': 2300},
            {'month': 'May', 'sales': 3100},
            {'month': 'Jun', 'sales': 3900},
        ],
        'insights': [
            'Los clientes activos aumentaron este mes.',
            'El inventario necesita revisión en productos de baja rotación.',
            'Las ventas digitales tienen mejor rendimiento.',
        ],
    })
