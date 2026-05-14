import { LayoutDashboard, Users, Package, ShoppingCart, BarChart3 } from 'lucide-react'

const items = [
  { icon: LayoutDashboard, text: 'Dashboard' },
  { icon: Users, text: 'Clientes' },
  { icon: Package, text: 'Inventario' },
  { icon: ShoppingCart, text: 'Ventas' },
  { icon: BarChart3, text: 'Reportes' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span>SB</span>
        <div>
          <h2>SmartBusiness</h2>
          <p>Panel SaaS</p>
        </div>
      </div>

      <nav>
        {items.map((item) => {
          const Icon = item.icon
          return (
            <button className="nav-item" key={item.text}>
              <Icon size={18} />
              {item.text}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}