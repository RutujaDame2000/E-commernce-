import React from 'react'

function Ads(props) {
  return (
    <div className='col-md-3 mt-2'>
      
      <div className="card-w-100" >
  <img src="https://inventstore.in/wp-content/uploads/2024/07/63.webp" className="card-img-top" alt="..."
  style={{width:"100%"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>
    </div>
  )
}

export default Ads
