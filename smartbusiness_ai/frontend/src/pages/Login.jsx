import React from 'react'

export default function Login({ onLogin }) {
  function handleSubmit(event) {
    event.preventDefault()
    onLogin()
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-brand">SB</div>
        <h1>SmartBusiness AI</h1>
        <p>Panel inteligente para negocios pequeños y medianos.</p>

        <form onSubmit={handleSubmit}>
          <label>Correo electrónico</label>
          <input type="email" placeholder="admin@smartbusiness.com" />

          <label>Contraseña</label>
          <input type="password" placeholder="********" />

          <button className="primary-button full">Ingresar al sistema</button>
        </form>

        <span className="hint">Demo de portafolio: puedes ingresar sin cuenta real.</span>
      </section>
    </main>
  )
}