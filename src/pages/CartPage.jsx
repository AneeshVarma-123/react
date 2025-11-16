import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, removeItem } from '../store/cartSlice'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const items = useSelector(s => s.cart.items)
  const dispatch = useDispatch()

  const itemList = Object.values(items)
  const totalCount = itemList.reduce((sum, it) => sum + it.quantity, 0)
  const totalCost = itemList.reduce((sum, it) => sum + it.quantity * it.price, 0)

  return (
    <section className="cart container">
      <h2>Your Cart</h2>
      <div className="cart-summary">
        <div>Total items: <strong>{totalCount}</strong></div>
        <div>Total cost: <strong>${totalCost.toFixed(2)}</strong></div>
      </div>

      {itemList.length === 0 ? (
        <div className="empty">Your cart is empty. <Link to="/products">Continue shopping</Link></div>
      ) : (
        <div className="cart-items">
          {itemList.map(it => (
            <div key={it.id} className="cart-item">
              <img src={it.image} alt={it.name} />
              <div className="info">
                <h4>{it.name}</h4>
                <div>Unit price: ${it.price}</div>
              </div>
              <div className="controls">
                <button onClick={() => dispatch(decrement(it.id))}>-</button>
                <span className="qty">{it.quantity}</span>
                <button onClick={() => dispatch(increment(it.id))}>+</button>
                <button className="delete" onClick={() => dispatch(removeItem(it.id))}>Delete</button>
              </div>
            </div>
          ))}

          <div className="cart-actions">
            <button onClick={() => alert('Coming Soon')}>Checkout</button>
            <Link to="/products" className="continue">Continue Shopping</Link>
          </div>
        </div>
      )}
    </section>
  )
}
