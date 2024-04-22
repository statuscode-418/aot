import React from 'react';
import Card from '../components/card'; // Ensure correct path to Card component
import { card } from '../constants/card'; // Importing 'card' from 'constants/card'

const CardWrapper = () => {
  return (
    <>
      {card.map((item) => ( // Changed 'content' to 'card'
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
         info ={item.text} // Changed from 'info' to 'text'
          buttonLink={item.link} // Changed from 'buttonLink' to 'link'
        />
      ))}
    </>
  );
};

export default CardWrapper;

