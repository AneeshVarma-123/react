import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const items = useSelector((s) => s.cart.items)
  const totalCount = Object.values(items).reduce((sum, it) => sum + it.quantity, 0)

  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="brand">GreenThumbs</Link>
        <nav>
          <Link to="/products">Products</Link>
          <Link to="/cart" className="cart-link">
            🛒 <span className="cart-count">{totalCount}</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
