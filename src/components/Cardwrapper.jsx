import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/card';
import { card } from '../constants/card';

const CardWrapper = () => {
  const [currentCards, setCurrentCards] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const startIndex = Math.floor(Math.random() * (card.length - 3));
      const newCards = card.slice(startIndex, startIndex + 3);
      
      // Add an animation for card change
      setCurrentCards((prevCards) => {
        return prevCards.length === 0 ? newCards : [...prevCards.slice(1), newCards[2]];
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const cardVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.5 } }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginRight: '2 rem' }}>
      <AnimatePresence>
        {currentCards.map((item, index) => (
          <motion.div
            key={item.id}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={cardVariants}
            style={{ marginRight: index !== currentCards.length - 1 ? '2rem' : 0 }}
          >
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              info={item.text}
              buttonLink={item.link}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CardWrapper;

