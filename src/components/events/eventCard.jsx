import React from "react";

export const EventCard = ({ event }) => {
	// event date is in the format dd-mm-yyyy string convert it to month dd
	const eventDate = new Date(event.event_date);
	const options = { month: "short", day: "numeric" };
	const formattedDate = eventDate.toLocaleDateString("en-US", options);

	return (
		<a href={event.event_link} target="_blank" rel="noreferrer noopener">
			<div className="event-card max-w-xs h-full bg-aot-indigo p-4 rounded-sm ransform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
				<div className=" w-full h-[10%] flex justify-start items-center">
					<div className="w-1/3 bg-yellow-500 h-1" />
				</div>
				<div className="w-full h-[30%]">
					<h1 className="text-lg md:text-xl lg:text-2xl text-yellow-500 font-bold">
						{formattedDate}
					</h1>
				</div>
				<div className=" h-[60%] overflow-hidden ">
					<h2 className=" text-lg md:text-xl lg:text-2xl text-white font-bold">
						{event.event_title}
					</h2>
				</div>
			</div>
		</a>
	);
};
