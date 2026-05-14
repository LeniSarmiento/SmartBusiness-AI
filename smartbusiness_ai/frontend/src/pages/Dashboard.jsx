import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import KpiCard from '../components/KpiCard'
import PageHeader from '../components/PageHeader'
import { monthlySales, initialCustomers, initialProducts, initialSales } from '../data/demoData'

export default function Dashboard() {
  const totalSales = initialSales.reduce((total, sale) => total + sale.amount, 0)
  const lowStock = initialProducts.filter(product => product.stock <= 5).length

  return (
    <>
      <PageHeader
        title="Dashboard de negocio"
        description="Resumen general de ventas, clientes, inventario y alertas importantes."
        buttonText="Nuevo reporte"
      />

      <section className="hero-card">
        <div>
          <h2>Control completo para tu negocio</h2>
          <p>
            Visualiza indicadores clave, detecta productos con bajo stock y revisa el rendimiento
            de tus ventas desde un panel moderno.
          </p>
        </div>
        <span>Demo SaaS</span>
      </section>

      <section className="kpi-grid">
        <KpiCard title="Ventas registradas" value={`S/ ${totalSales}`} detail="+18% este mes" />
        <KpiCard title="Clientes" value={initialCustomers.length} detail="Base activa" />
        <KpiCard title="Productos" value={initialProducts.length} detail="Inventario actual" />
        <KpiCard title="Alertas" value={lowStock} detail="Stock bajo" />
      </section>

      <section className="grid-two">
        <div className="card">
          <div className="section-title">
            <h3>Ventas mensuales</h3>
            <p>Evolución de ingresos por mes</p>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlySales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card ai-card">
          <div className="section-title">
            <h3>Recomendación inteligente</h3>
            <p>Análisis automático</p>
          </div>
          <p>
            Las ventas muestran crecimiento. Se recomienda reforzar los productos con mayor margen
            y revisar el stock de servicios con alta rotación.
          </p>
          <button className="secondary-button">Ver detalles</button>
        </div>
      </section>
    </>
  )
}