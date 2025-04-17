import React from 'react';
import Carousel from '../components/Carousel';
import Ads from '../components/Ads';
import ProductSection from '../components/ProductSection';
import Navbar  from '../components/Navbar'

function Home() {
  let ProductArray = ['Iphone','Samsung','Poco','Oppo']
  return (
    
    
    <div className='container-fluid'>

   
        <Navbar/>
        <Carousel />
        <div className='row'>
          {ProductArray.map(el => <Ads  name={el}/> )}
      
    </div>
    <ProductSection />
     </div>
  );
}

export default Home;