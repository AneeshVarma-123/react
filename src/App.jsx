import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import ProductListing from './pages/ProductListing'
import CartPage from './pages/CartPage'
import Header from './components/Header'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  )
}
