import React from 'react'

function Carousel() {
  return (
  
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height:"80vh"}} src="https://images.herzindagi.info/her-zindagi-english/images/2024/09/27/article/image/myntra-sale-1727423186355.jpg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img style={{height:"80vh"}} src="https://www.india.com/wp-content/uploads/2017/10/myntra-sale.png" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img style={{height:"80vh"}} src="https://english.cdn.zeenews.com/sites/default/files/2024/09/25/1522342-eid-blog-banner.png
      " class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
 
  )
}

export default Carousel
