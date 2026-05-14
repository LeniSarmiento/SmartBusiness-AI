import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { salesChart } from '../data/demoData'

export default function SalesChart() {
  return (
    <div className="card chart-card">
      <div className="section-title">
        <h3>Ventas mensuales</h3>
        <p>Resumen visual del crecimiento del negocio</p>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={salesChart}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}