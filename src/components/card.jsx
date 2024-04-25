import React from 'react';
import '../../public/styles/card.css'

function Card({ image, title, info, buttonLink }) {
 const newinfo = info.split('.')[0]

 return (
    <>
      <div className="card">
        <img src={image} className="card-img" alt="image" /> 
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <p className="card-info">{info}</p>
          <a href={buttonLink}>
            <button className="card-btn">Read More</button>
          </a>  
        </div>
      </div>   
    </>
 );
}

export default Card;

