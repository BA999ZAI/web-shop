import React from 'react'

export default function Header() {
  return (
    <header style={{display: 'flex', alignItems: 'center'}}>
        <h2>Clothing store</h2>
        <div style={{marginLeft: 'auto', width: '200px', display: 'flex', justifyContent: 'space-between'}}>
            <a>Товары</a>
            <a>Контакты</a>
        </div>
    </header>
  )
}
