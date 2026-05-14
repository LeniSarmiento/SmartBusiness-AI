import React from 'react'

export default function KpiCard({ title, value, detail }) {
  return (
    <div className="kpi-card">
      <p>{title}</p>
      <h3>{value}</h3>
      <span>{detail}</span>
    </div>
  )
}