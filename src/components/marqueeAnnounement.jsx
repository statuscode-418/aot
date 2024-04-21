import React from "react";

const MarqueeAnouncement = ({ announcements }) => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => (index + 1) % announcements.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [announcements]);

    return (
        <div className="text-center py-2  border-y-2 border-blue-700 bg-white  w-full overflow-hidden items-stretch">
            <p className="text-blue-700 animate-marqee font-bold ">{announcements[index]}</p>
        </div>
    );
}

export default MarqueeAnouncement;