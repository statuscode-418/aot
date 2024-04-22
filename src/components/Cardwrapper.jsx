import React from 'react';
import Card from '../components/card';
import { card } from '../constants/card';

const CardWrapper = () => {
  return (
    <>
      {card.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          info={item.text}
          buttonLink={item.link}
        />
      ))}
    </>
  );
};

export default CardWrapper;

