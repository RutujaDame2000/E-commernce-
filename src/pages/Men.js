// import React from 'react';
// import ProductSection from '../components/ProductSection';

// const Men = () => {
//   return (
//     <div>
//       <h2 className="text-center py-4">Men's Collection</h2>
//       <ProductSection />

//       Men
//     </div>
//   );
// };
// export default Men;

// pages/Men.js
import React from 'react';

import ProductSection from '../components/ProductSection';
import '../components/Men.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Men = () => {
  return (
    <div className="men-container">
      <Navbar/>
      <h2 className="text-center py-4">Men's Collection</h2>
      <div className="men-layout">
        <Sidebar />
        <ProductSection />
      </div>
    </div>
  );
};

export default Men;



