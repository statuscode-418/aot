import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/card';
import { card } from '../constants/card';

const CardWrapper = () => {
 const [currentCards, setCurrentCards] = useState([]);
 const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial window size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
 }, []);

 useEffect(() => {
    const interval = setInterval(() => {
      const startIndex = Math.floor(Math.random() * (card.length - 3));
      const newCards = card.slice(startIndex, startIndex + 3);

      setCurrentCards((prevCards) => {
        return prevCards.length === 0 ? newCards : [...prevCards.slice(1), newCards[2]];
      });
    }, 10000);

    return () => clearInterval(interval);
 }, []);

 const cardVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
 };

 return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: '1200px',
        padding: '0 20px',
      }}
    >
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
            {isMobile && index === 0 ? ( // Display only the first card for mobile devices
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                info={item.text}
                buttonLink={item.link}
              />
            ) : !isMobile ? ( // Display all cards for non-mobile devices
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                info={item.text}
                buttonLink={item.link}
              />
            ) : null}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
 );
};

export default CardWrapper;

