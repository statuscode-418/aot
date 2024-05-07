import React from "react";
import videoSrc from "../../assets/aotvideo.webm";
const video = () => {
	return (
		<>
			<section class="relative w-full h-[75vh]">
				<div>Find</div>
				<div>your</div>
				<div>dreams</div>
				<video
					src={'https://res.cloudinary.com/dtwrlsxun/video/upload/v1715102927/aot_assets/zsnmhagj3dyqddbeocnl.mp4'}
					poster="../assets/aot2.jpg"
					autoPlay
					loop
					muted
					className="w-full h-full object-cover absolute inset-0 z-0"
				/>
			</section>
		</>
	);
};

export default video;
