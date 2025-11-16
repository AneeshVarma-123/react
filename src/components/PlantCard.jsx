import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/cartSlice'

export default function PlantCard({ plant }) {
  const dispatch = useDispatch()
  const inCart = useSelector(s => !!s.cart.items[plant.id])

  function handleAdd() {
    dispatch(addItem(plant))
  }

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <div className="plant-info">
        <h4>{plant.name}</h4>
        <div className="price">${plant.price}</div>
        <button onClick={handleAdd} disabled={inCart} className="add-btn">
          {inCart ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}
