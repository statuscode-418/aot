import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const images = [
  'https://images.unsplash.com/photo-1663583513676-9f6361cd859d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1663530294185-5af3692326c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80',
  'https://images.unsplash.com/photo-1663579111009-863bc978c78e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1663492412083-17bfcad3c533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1663571473113-d3fc49bbe775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
  'https://images.unsplash.com/photo-1663431263243-ef4aa402afc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1663330082092-11fa01e1ee8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1663450806250-da193dc36368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1149&q=80',
  'https://images.unsplash.com/photo-1663352248740-645afa021c9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1663431905837-09cf339461ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2207&q=80',
];

const Image = ({ src, active, left, top }) => (
  <motion.img
    className={`absolute w-[40vmin]`}
    src={src}
    style={{ left, top }}
    alt=""
    animate={{
      opacity: active ? 1 : 0,
      scale: active ? 1.2 : 1, // Scale up when active
    }}
    transition={{ duration: 0.5 }}
  />
);

const App = () => {
  const [globalIndex, setGlobalIndex] = useState(0);
  const [last, setLast] = useState({ x: 0, y: 0 });
  const imageRefs = useRef({});

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e instanceof MouseEvent ? e : e.touches[0];

      if (distanceFromLast(clientX, clientY) > window.innerWidth / 20) {
        setGlobalIndex((prevIndex) => prevIndex + 1);
        setLast({ x: clientX, y: clientY });
      }
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, [globalIndex]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(imageRefs.current[0], {
      duration: 2,
      x: '+=100',
      y: '+=100',
      ease: 'power1.inOut',
    });

    return () => tl.kill();
  }, []);

  const distanceFromLast = (x, y) => Math.hypot(x - last.x, y - last.y);

  return (
    <div>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          active={index === globalIndex % images.length}
          left={last.x}
          top={last.y}
          ref={(el) => (imageRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default App;


