import React from 'react'
import PageHeader from '../components/PageHeader'

export default function Settings() {
  return (
    <>
      <PageHeader title="Configuración" description="Personaliza los datos generales del negocio." />

      <section className="card settings-card">
        <label>Nombre del negocio</label>
        <input placeholder="SmartBusiness AI" />
        <label>Correo del administrador</label>
        <input placeholder="admin@smartbusiness.com" />
        <label>Ciudad</label>
        <input placeholder="Arequipa" />
        <label>Moneda</label>
        <select>
          <option>Soles peruanos (S/)</option>
          <option>Dólares ($)</option>
        </select>
        <button className="primary-button">Guardar cambios</button>
      </section>
    </>
  )
}