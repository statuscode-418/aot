import React from "react";
import { EventCarousel } from "./eventCourasel";
import { events } from "../../constants/event";

export const EventComponent = () => {
    return (
        <div className="w-full h-[50vh] bg-[url('/assets/aot4.jpg')] bg-cover py-4 my-2">
            <div className="w-full flex justify-center items-center h-[10%] lg:h-[20%]">
                <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">Events</h1>
            </div>
            <div className="w-full h-[80%] lg:h-[60%]">
                <EventCarousel events={events}></EventCarousel>
            </div>
            <div className="h-[10%] items-center justify-center flex lg:h-[20%]">
                <button className="bg-aot-indigo text-white p-2 rounded-md text-sm md:text-base">View All</button>
            </div>
        </div>
    )
}