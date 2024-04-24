import React from 'react';
import '../../public/styles/card.css'
function Card({ image, title,  info, buttonLink }) {

  const newinfo = info.split('.')[0]

  return (
  <>
  <div class="card">
     <img src={image} class="card-img" alt="image" /> 
      <div class="card-body">
        <h1 class="card-title">{title}</h1>
        <p class="card-info">{info}</p>
      <a href={buttonLink}>
        <button class="card-btn">Read More</button>
      </a>  
    </div>

    </div>   
  </>
  );
}

export default Card;

