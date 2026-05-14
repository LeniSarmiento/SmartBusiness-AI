import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import Inventory from './pages/Inventory'
import Sales from './pages/Sales'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import Login from './pages/Login'

export default function App() {
  const [activePage, setActivePage] = useState('dashboard')
  const [isLogged, setIsLogged] = useState(false)

  if (!isLogged) {
    return <Login onLogin={() => setIsLogged(true)} />
  }

  const pages = {
    dashboard: <Dashboard />,
    customers: <Customers />,
    inventory: <Inventory />,
    sales: <Sales />,
    reports: <Reports />,
    settings: <Settings />
  }

  return (
    <main className="app-layout">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <section className="content">
        {pages[activePage]}
      </section>
    </main>
  )
}