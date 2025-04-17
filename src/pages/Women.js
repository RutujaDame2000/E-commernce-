import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import WomenProductSection from '../components/WomenProductSection'; // Make sure this path is correct
import '../components/Men.css'; // Reuse same styling if needed

const Women = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Expected an array but got:', data);
        }
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="men-container">
      <Navbar />
      <h2 className="text-center py-4">Women's Collection</h2>
      <div className="men-layout">
        <Sidebar />
        <WomenProductSection products={products} />
      </div>
    </div>
  );
};

export default Women;

