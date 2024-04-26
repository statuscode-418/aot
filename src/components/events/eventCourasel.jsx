import React, { useEffect, useRef } from "react";
import { EventCard } from "./eventCard";

export const EventCarousel = ({ events }) => {
    const divRef = useRef();

    let isDown = false;
    let autoScroll = true;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
        isDown = true;
        autoScroll = false;
        divRef.current.classList.add('active');
        startX = e.pageX - divRef.current.offsetLeft;
        scrollLeft = divRef.current.scrollLeft;
    }

    const handleMouseLeave = () => {
        isDown = false;
        divRef.current.classList.remove('active');
        setTimeout(() => {
            autoScroll = true;
        }, 2000);
    }


    const handleMouseUp = () => {
        isDown = false;
        divRef.current.classList.remove('active');
        setTimeout(() => {
            autoScroll = true;
        }, 2000);
    }


    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - divRef.current.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        divRef.current.scrollLeft = scrollLeft - walk;
    }

    const handelTouchStart = (e) => {
        isDown = true;
        autoScroll = false;
        divRef.current.classList.add('active');
        startX = e.touches[0].pageX - divRef.current.offsetLeft;
        scrollLeft = divRef.current.scrollLeft;
    }

    const handelTouchEnd = () => {
        isDown = false;
        divRef.current.classList.remove('active');
        setTimeout(() => {
            autoScroll = true;
        }, 2000);
    }


    useEffect(() => {
        const interval = setInterval(() => {
            if (isDown) return;
            if (!autoScroll) return;
            divRef.current.scrollTo({
                left: divRef.current.scrollLeft + 200,
                behavior: 'smooth'
            })
        }, 5000);

        return () => {
            clearInterval(interval);
        }
    }
        , [isDown, autoScroll]);

    return (
        <div
            className="flex overflow-x-scroll scrollbar-hide w-full h-full"
            ref={divRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handelTouchStart}
            onTouchEnd={handelTouchEnd}
        >
            {events.map((event, index) => {
                return (
                    <div className="p-4 w-[1/4vw] h-full inline-block flex-none " key={index}>
                        <EventCard event={event} />
                    </div>
                )
            },)}
        </div>
    )
}