import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { initialProducts } from '../data/demoData'

export default function Inventory() {
  const [products, setProducts] = useState(initialProducts)
  const [form, setForm] = useState({ name: '', category: '', stock: '', price: '' })

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name.trim()) return
    setProducts([...products, { id: Date.now(), name: form.name, category: form.category, stock: Number(form.stock), price: Number(form.price) }])
    setForm({ name: '', category: '', stock: '', price: '' })
  }

  function deleteProduct(id) {
    setProducts(products.filter(product => product.id !== id))
  }

  return (
    <>
      <PageHeader title="Inventario" description="Controla productos, precios, categorías y alertas de stock." />

      <section className="grid-two">
        <form className="card form-card" onSubmit={handleSubmit}>
          <h3>Nuevo producto</h3>
          <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Nombre del producto" />
          <input value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} placeholder="Categoría" />
          <input type="number" value={form.stock} onChange={e => setForm({ ...form, stock: e.target.value })} placeholder="Stock" />
          <input type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} placeholder="Precio" />
          <button className="primary-button">Guardar producto</button>
        </form>

        <div className="inventory-grid">
          {products.map(product => (
            <article className="product-card" key={product.id}>
              <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </div>
              <strong>S/ {product.price}</strong>
              <span className={product.stock <= 5 ? 'stock-low' : 'stock-ok'}>Stock: {product.stock}</span>
              <button className="danger-button" onClick={() => deleteProduct(product.id)}>Eliminar</button>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}