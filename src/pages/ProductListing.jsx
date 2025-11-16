import React from 'react'
import plants from '../data/plants'
import PlantCard from '../components/PlantCard'

export default function ProductListing() {
  const categories = [...new Set(plants.map(p => p.category))]

  return (
    <section className="products container">
      <h2>Plant Collection</h2>
      {categories.map(cat => (
        <div key={cat} className="category-block">
          <h3>{cat}</h3>
          <div className="grid">
            {plants.filter(p => p.category === cat).map(p => (
              <PlantCard key={p.id} plant={p} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
