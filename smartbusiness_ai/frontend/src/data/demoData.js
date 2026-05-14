export const initialCustomers = [
  { id: 1, name: 'Carlos Mendoza', email: 'carlos@email.com', phone: '999 888 777', city: 'Arequipa', status: 'Activo' },
  { id: 2, name: 'María Torres', email: 'maria@email.com', phone: '988 777 666', city: 'Lima', status: 'Activo' },
  { id: 3, name: 'Luis Ramos', email: 'luis@email.com', phone: '977 666 555', city: 'Cusco', status: 'Nuevo' }
]

export const initialProducts = [
  { id: 1, name: 'Servicio mensual', category: 'Suscripción', stock: 20, price: 150 },
  { id: 2, name: 'Pack premium', category: 'Digital', stock: 8, price: 280 },
  { id: 3, name: 'Asesoría express', category: 'Servicio', stock: 4, price: 90 },
  { id: 4, name: 'Plan empresa', category: 'Corporativo', stock: 12, price: 450 }
]

export const initialSales = [
  { id: 1, customer: 'Carlos Mendoza', product: 'Servicio mensual', amount: 150, method: 'Yape', date: '2026-05-10' },
  { id: 2, customer: 'María Torres', product: 'Pack premium', amount: 280, method: 'Transferencia', date: '2026-05-11' },
  { id: 3, customer: 'Luis Ramos', product: 'Asesoría express', amount: 90, method: 'Efectivo', date: '2026-05-12' }
]

export const monthlySales = [
  { month: 'Ene', sales: 1200 },
  { month: 'Feb', sales: 1800 },
  { month: 'Mar', sales: 1500 },
  { month: 'Abr', sales: 2300 },
  { month: 'May', sales: 3100 },
  { month: 'Jun', sales: 3900 }
]