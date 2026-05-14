import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { initialCustomers } from '../data/demoData'

export default function Customers() {
  const [customers, setCustomers] = useState(initialCustomers)
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '' })
  const [search, setSearch] = useState('')

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(search.toLowerCase()) ||
    customer.city.toLowerCase().includes(search.toLowerCase())
  )

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name.trim()) return
    setCustomers([...customers, { id: Date.now(), ...form, status: 'Nuevo' }])
    setForm({ name: '', email: '', phone: '', city: '' })
  }

  function deleteCustomer(id) {
    setCustomers(customers.filter(customer => customer.id !== id))
  }

  return (
    <>
      <PageHeader title="Gestión de clientes" description="Registra, busca y administra clientes desde una vista simple." />

      <section className="grid-two">
        <form className="card form-card" onSubmit={handleSubmit}>
          <h3>Nuevo cliente</h3>
          <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Nombre completo" />
          <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Correo" />
          <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Teléfono" />
          <input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} placeholder="Ciudad" />
          <button className="primary-button">Guardar cliente</button>
        </form>

        <div className="card">
          <div className="section-title">
            <h3>Clientes registrados</h3>
            <p>Total: {customers.length}</p>
          </div>

          <input className="search-input" value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar por nombre o ciudad..." />

          <table>
            <thead>
              <tr><th>Cliente</th><th>Ciudad</th><th>Estado</th><th></th></tr>
            </thead>
            <tbody>
              {filteredCustomers.map(customer => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.city}</td>
                  <td><span className="badge">{customer.status}</span></td>
                  <td><button className="danger-button" onClick={() => deleteCustomer(customer.id)}>Eliminar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}