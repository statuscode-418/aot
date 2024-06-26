import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Counter = () => {
  const [counter, setCounter] = useState([
    {
      id: "counter1",
      end: 132,
      prefix: "",
      suffix: "Professional Teachers",
      start: Math.floor(Math.random() * 45) + 1, 
    },
    {
      id: "counter2",
      start: Math.floor(Math.random() * 1000) + 1, 
      end: 3917,
      prefix: "",
      suffix: "Registered Students",
    },
    {
      id: "counter3",
      start: Math.floor(Math.random() * 1000) + 1, 
      end: 15197,
      prefix: "",
      suffix: "Established Alumni",
    },
    {
      id: "counter4",
      start: Math.floor(Math.random() * 45) + 1, 
      end: 121,
      prefix: "",
      suffix: "Placement on 2024",
    },
  ]);

  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    const resetCounter = () => {
      if (!isVisible) {
        setCounter((prevCounter) =>
          prevCounter.map((c) => ({
            ...c,
            start: Math.floor(Math.random() * 1000) + 1, // Reset to random number between 1 to 1000
          }))
        );
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            resetCounter();
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
  }, [isVisible]);

  const startCounter = () => {
    const duration = 3; // Duration in seconds
    const interval = 0.03; // Interval in seconds

    counter.forEach((counterItem) => {
      const { id, start, end } = counterItem;
      const increment = (end - start) / (duration / interval);
      let currentCount = start;

      gsap.to(counterItem, {
        start: end,
        duration: duration,
        ease: "power2.out",
        onUpdate: () => {
          setCounter((prevCounter) =>
            prevCounter.map((c) =>
              c.id === id ? { ...c, start: Math.ceil(currentCount) } : c
            )
          );
          currentCount += increment;
          if (currentCount >= end) {
            gsap.killTweensOf(counterItem);
          }
        },
      });
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-[600px] bg-cover bg-bottom bg-[url('/assets/aot3.png')]">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div
        className="absolute top-1/2 left-1/2 sm:top-1/2 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8"
        ref={counterRef}
      >
        {counter.map((counter, key) => (
          <div className="text-white flex items-center" key={counter.id}>
            <span className="text-6xl font-bold flex items-center">
              {counter.start}
              {counter.id === "counter4" && <span className="text-5xl">%</span>}
            </span>
            <div className="ml-2">
              <div className="text-3xl">{counter.prefix}</div>
              {counter.id === "counter4" && (
                <div className="text-3xl">{counter.suffix}</div>
              )}
              {counter.id !== "counter4" && (
                <div className="text-3xl">{counter.suffix}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
