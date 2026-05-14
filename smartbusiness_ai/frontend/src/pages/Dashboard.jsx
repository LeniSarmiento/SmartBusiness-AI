import Sidebar from '../components/Sidebar'
import KpiCard from '../components/KpiCard'
import SalesChart from '../components/SalesChart'
import ProductTable from '../components/ProductTable'
import { kpis } from '../data/demoData'

export default function Dashboard() {
  return (
    <main className="app-layout">
      <Sidebar />

      <section className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Panel administrativo</p>
            <h1>Dashboard de negocio inteligente</h1>
          </div>

          <button className="primary-button">Nuevo reporte</button>
        </header>

        <section className="hero-card">
          <div>
            <h2>SmartBusiness AI</h2>
            <p>
              Plataforma full stack para controlar ventas, clientes e inventario desde un solo lugar.
              Incluye reportes visuales y alertas simples para ayudar en la toma de decisiones.
            </p>
          </div>
          <span>Versión demo</span>
        </section>

        <section className="kpi-grid">
          {kpis.map((item) => (
            <KpiCard key={item.title} {...item} />
          ))}
        </section>

        <section className="grid-two">
          <SalesChart />

          <div className="card ai-card">
            <div className="section-title">
              <h3>Recomendación inteligente</h3>
              <p>Análisis automático del sistema</p>
            </div>
            <p>
              Las ventas muestran un crecimiento positivo. Se recomienda revisar los productos con
              menor stock y reforzar las promociones de los servicios más vendidos.
            </p>
            <button className="secondary-button">Ver análisis</button>
          </div>
        </section>

        <ProductTable />
      </section>
    </main>
  )
}