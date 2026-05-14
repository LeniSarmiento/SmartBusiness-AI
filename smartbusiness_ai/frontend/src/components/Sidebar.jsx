import React from 'react'
import { LayoutDashboard, Users, Package, ShoppingCart, BarChart3, Settings } from 'lucide-react'

const items = [
  { id: 'dashboard', icon: LayoutDashboard, text: 'Dashboard' },
  { id: 'customers', icon: Users, text: 'Clientes' },
  { id: 'inventory', icon: Package, text: 'Inventario' },
  { id: 'sales', icon: ShoppingCart, text: 'Ventas' },
  { id: 'reports', icon: BarChart3, text: 'Reportes' },
  { id: 'settings', icon: Settings, text: 'Configuración' },
]

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span>SB</span>
        <div>
          <h2>SmartBusiness</h2>
          <p>AI SaaS Platform</p>
        </div>
      </div>

      <nav>
        {items.map((item) => {
          const Icon = item.icon
          return (
            <button
              className={`nav-item ${activePage === item.id ? 'active' : ''}`}
              key={item.id}
              onClick={() => setActivePage(item.id)}
            >
              <Icon size={18} />
              {item.text}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}