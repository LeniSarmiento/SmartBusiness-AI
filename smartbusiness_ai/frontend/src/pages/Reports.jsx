import React from 'react'
import PageHeader from '../components/PageHeader'

export default function Reports() {
  const reports = [
    'Las ventas aumentaron en los últimos meses. Conviene reforzar las campañas digitales.',
    'Hay productos con bajo stock. Se recomienda reponerlos antes de la próxima semana.',
    'Los clientes nuevos están creciendo. Una campaña de fidelización puede mejorar la recompra.',
  ]

  return (
    <>
      <PageHeader title="Reportes inteligentes" description="Recomendaciones automáticas para tomar mejores decisiones." buttonText="Exportar reporte" />

      <section className="report-grid">
        {reports.map((report, index) => (
          <article className="card report-card" key={report}>
            <span>Insight #{index + 1}</span>
            <p>{report}</p>
          </article>
        ))}
      </section>
    </>
  )
}