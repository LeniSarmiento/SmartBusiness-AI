export default function KpiCard({ title, value, change }) {
  return (
    <div className="kpi-card">
      <p>{title}</p>
      <h3>{value}</h3>
      <span>{change}</span>
    </div>
  )
}