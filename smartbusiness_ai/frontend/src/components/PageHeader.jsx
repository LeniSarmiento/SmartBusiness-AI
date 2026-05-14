import React from 'react'

export default function PageHeader({ title, description, buttonText }) {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">SmartBusiness AI</p>
        <h1>{title}</h1>
        <p className="page-description">{description}</p>
      </div>
      {buttonText && <button className="primary-button">{buttonText}</button>}
    </header>
  )
}