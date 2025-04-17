import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProductSection from '../components/ProductSection'

function Kids() {
  return (
    <div className="men-container">
    <Navbar/>
    <h2 className="text-center py-4">Kids Collection</h2>
    <div className="men-layout">
      <Sidebar />
      <ProductSection />
    </div>
  </div>
  )
}

export default Kids
