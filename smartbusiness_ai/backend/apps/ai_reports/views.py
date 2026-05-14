from rest_framework.decorators import api_view
from rest_framework.response import Response
from apps.sales.models import Sale
from apps.inventory.models import Product
from apps.business.models import Customer

@api_view(['GET'])
def dashboard_summary(request):
    total_sales = sum(float(sale.total) for sale in Sale.objects.all())
    sales_count = Sale.objects.count()
    customers_count = Customer.objects.count()
    low_stock = Product.objects.filter(stock__lte=5).count()

    message = 'El negocio se mantiene estable.'
    if low_stock > 0:
        message = 'Hay productos con stock bajo. Conviene revisar el inventario.'
    if total_sales > 3000:
        message = 'Las ventas muestran un buen crecimiento este periodo.'

    return Response({
        'total_sales': total_sales,
        'sales_count': sales_count,
        'customers_count': customers_count,
        'low_stock': low_stock,
        'ai_message': message,
        'monthly_sales': [
            {'month': 'Ene', 'sales': 1200},
            {'month': 'Feb', 'sales': 1800},
            {'month': 'Mar', 'sales': 1500},
            {'month': 'Abr', 'sales': 2300},
            {'month': 'May', 'sales': 3100},
        ]
    })