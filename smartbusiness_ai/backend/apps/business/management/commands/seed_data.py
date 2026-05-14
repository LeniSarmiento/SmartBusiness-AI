from django.core.management.base import BaseCommand
from apps.business.models import Customer
from apps.inventory.models import Product
from apps.sales.models import Sale

class Command(BaseCommand):
    help = 'Carga datos de ejemplo para probar el sistema'

    def handle(self, *args, **kwargs):
        customer, _ = Customer.objects.get_or_create(
            name='Cliente Demo',
            email='cliente@demo.com',
            phone='999888777',
            city='Arequipa'
        )

        product, _ = Product.objects.get_or_create(
            name='Servicio mensual',
            category='Suscripción',
            price=150,
            stock=20,
            min_stock=5
        )

        Sale.objects.get_or_create(
            customer=customer,
            product=product,
            quantity=1,
            total=150,
            payment_method='Yape'
        )

        self.stdout.write(self.style.SUCCESS('Datos de ejemplo cargados correctamente.'))