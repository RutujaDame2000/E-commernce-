import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProductSection from '../components/ProductSection'

function Beauty() {
  return (
    <div className="men-container">
    <Navbar/>
    <h2 className="text-center py-4">Beauty Collection</h2>
    <div className="men-layout">
      <Sidebar />
      <ProductSection />
    </div>
  </div>
  )
}

export default Beauty
