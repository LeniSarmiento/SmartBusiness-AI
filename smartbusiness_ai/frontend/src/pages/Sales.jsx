import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { initialSales } from '../data/demoData'

export default function Sales() {
  const [sales, setSales] = useState(initialSales)
  const [form, setForm] = useState({ customer: '', product: '', amount: '', method: 'Yape' })
  const total = sales.reduce((sum, sale) => sum + sale.amount, 0)

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.customer.trim() || !form.amount) return
    setSales([{ id: Date.now(), ...form, amount: Number(form.amount), date: new Date().toISOString().slice(0, 10) }, ...sales])
    setForm({ customer: '', product: '', amount: '', method: 'Yape' })
  }

  return (
    <>
      <PageHeader title="Ventas" description="Registra ventas y revisa el historial reciente del negocio." />

      <section className="kpi-grid">
        <div className="kpi-card"><p>Total vendido</p><h3>S/ {total}</h3><span>Historial demo</span></div>
        <div className="kpi-card"><p>Operaciones</p><h3>{sales.length}</h3><span>Ventas registradas</span></div>
      </section>

      <section className="grid-two">
        <form className="card form-card" onSubmit={handleSubmit}>
          <h3>Nueva venta</h3>
          <input value={form.customer} onChange={e => setForm({ ...form, customer: e.target.value })} placeholder="Cliente" />
          <input value={form.product} onChange={e => setForm({ ...form, product: e.target.value })} placeholder="Producto o servicio" />
          <input type="number" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} placeholder="Monto" />
          <select value={form.method} onChange={e => setForm({ ...form, method: e.target.value })}>
            <option>Yape</option><option>Plin</option><option>Efectivo</option><option>Transferencia</option>
          </select>
          <button className="primary-button">Registrar venta</button>
        </form>

        <div className="card">
          <div className="section-title"><h3>Historial de ventas</h3><p>Últimos movimientos</p></div>
          <table>
            <thead><tr><th>Cliente</th><th>Producto</th><th>Monto</th><th>Método</th></tr></thead>
            <tbody>
              {sales.map(sale => (
                <tr key={sale.id}><td>{sale.customer}</td><td>{sale.product}</td><td>S/ {sale.amount}</td><td>{sale.method}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}