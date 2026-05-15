from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from apps.accounts.models import UserProfile
from apps.business.models import Customer
from apps.inventory.models import Product
from apps.sales.models import Sale

class Command(BaseCommand):
    help = 'Carga datos de ejemplo'

    def handle(self, *args, **kwargs):
        user, created = User.objects.get_or_create(username='admin')
        if created:
            user.set_password('admin123')
            user.email = 'admin@smartbusiness.com'
            user.first_name = 'Administrador'
            user.save()

        UserProfile.objects.get_or_create(user=user, defaults={'business_name': 'SmartBusiness AI', 'role': 'admin', 'city': 'Arequipa'})

        customer, _ = Customer.objects.get_or_create(
            owner=user,
            name='Carlos Mendoza',
            defaults={'email': 'carlos@email.com', 'phone': '999888777', 'city': 'Arequipa', 'status': 'Activo'}
        )

        product, _ = Product.objects.get_or_create(
            owner=user,
            name='Servicio mensual',
            defaults={'category': 'Suscripción', 'price': 150, 'stock': 20, 'min_stock': 5}
        )

        Sale.objects.get_or_create(owner=user, customer=customer, product=product, quantity=1, total=150, payment_method='Yape')
        self.stdout.write(self.style.SUCCESS('Datos cargados. Usuario: admin / Clave: admin123'))
