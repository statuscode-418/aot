import React from 'react';

function Card({ image, title,  info, buttonLink }) {
  return (
    <div className="bg-blue-800 flex justify-center items-center h-screen">
      <div className="card w-80 h-96 border-8 border-white rounded-lg relative overflow-hidden">
        <img src={imageSrc} className="card-img w-full h-full object-cover" alt="image" />
        <div className="card-body absolute top-0 right-full w-full h-full bg-blue-900 bg-opacity-50 backdrop-blur-md rounded-lg text-white p-8 flex flex-col justify-center transition-transform duration-200 hover:right-0">
          <h1 className="card-title text-4xl font-semibold uppercase mb-8">{title}</h1>
          <p className="card-info leading-6 mb-8">{info}</p>
          <button className="card-btn text-white bg-blue-500 px-4 py-2 rounded font-semibold uppercase">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;

