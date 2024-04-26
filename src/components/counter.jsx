import React, { useEffect, useRef, useState } from 'react';
import '../../public/styles/animations.css';
import '../../public/styles/bg_transparent.css';

const Counter = () => {
  const [counters, setCounters] = useState([
    { id: 'counter1', start: 0, end: 69, prefix: '', suffix: 'Professional Teachers' },
    { id: 'counter2', start: 0, end: 3918, prefix: '', suffix: 'Registered Students' },
    { id: 'counter3', start: 0, end: 15198, prefix: '', suffix: 'Established Alumni' },
    { id: 'counter4', start: 0, end: 150, prefix: '', suffix: 'Placement on 2024' }
  ]);

  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            startCounter();
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      startCounter();
    }
  }, [isVisible]);

  const startCounter = () => {
    const animateCounter = (counter) => {
      const duration = 3000;
      const interval = 30; // Update interval in milliseconds
      const increment = (counter.end - counter.start) / (duration / interval);
      let currentCount = counter.start;

      const timer = setInterval(() => {
        currentCount += increment;

        if (currentCount >= counter.end) {
          currentCount = counter.end;
          clearInterval(timer);
        }

        // Update the counter
        setCounters((prevCounters) =>
          prevCounters.map((c) =>
            c.id === counter.id ? { ...c, start: Math.ceil(currentCount) } : c
          )
        );
      }, interval);
    };

    // Start each counter animation
    counters.forEach((counter) => animateCounter(counter));
  };

  return (
    <div className="relative" ref={counterRef}>
      <img className="w-full h-[600px]" src="../assets/aot3.png" alt="Academy of Technology" />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 sm:top-1/2 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-12">
        {counters.map((counter, key) => (
          <div className="text-white flex items-center" key={counter.id}>
            <span className="text-6xl font-bold flex items-center">
              {counter.start}
              {counter.id === 'counter4' && <span className="text-5xl">%</span>}
            </span>
            <div className="ml-2">
              <div className="text-3xl">{counter.prefix}</div>
              {counter.id === 'counter4' && <div className="text-3xl">{counter.suffix}</div>}
              {counter.id !== 'counter4' && <div className="text-3xl">{counter.suffix}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
