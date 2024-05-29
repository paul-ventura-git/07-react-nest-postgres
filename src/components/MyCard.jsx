import React from 'react'

function MyCard( props ) {
  return (
    <div className="card" style={{width: "18rem", marginBottom: "10px"}}>
      <img 
        src={props.image} 
        className="card-img-top" 
        alt={props.title}
        style={{padding: "15px"}} 
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">Price: US$ {props.price}</p>
        <a href="/cart" className="btn btn-primary">Add to cart</a>
      </div>
    </div>

  )
}

export default MyCard