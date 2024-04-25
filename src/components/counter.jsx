import React, { useEffect } from 'react';
import '../../public/styles/animations.css';
import '../../public/styles/bg_transparent.css';

const Counter = () => {
    useEffect(() => {
        const counter = (element, options) => {
            const settings = {
                start: 0,
                end: 100,
                easing: 'swing',
                duration: 400,
                complete: '',
                suffix: ''
            };

            Object.assign(settings, options);

            const thisElement = document.querySelector(element);

            let startTime = null;

            const animateCounter = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;

                const progressPercentage = Math.min(progress / settings.duration, 1);
                const currentCount = Math.ceil(settings.start + (progressPercentage * (settings.end - settings.start)));

                thisElement.textContent = currentCount;
                if (settings.suffix) {
                    thisElement.innerHTML = `<span class="text-6xl">${currentCount}</span><div class="flex flex-col justify-center h-full"><span class="text-3xl">${settings.suffix}</span></div>`;
                }

                if (progressPercentage < 1) {
                    requestAnimationFrame(animateCounter);
                } else {
                    if (typeof settings.complete === 'function') {
                        settings.complete();
                    }
                }
            };

            requestAnimationFrame(animateCounter);
        };

        counter('#counter1', { end: 69, duration: 3000, suffix: ' Professional Teachers' });
        counter('#counter2', { end: 3918, duration: 3000, suffix: ' Registered Students' });
        counter('#counter3', { end: 15198, duration: 3000, suffix: ' Established Alumni' });
    }, []);

    return (
    <div className="relative">
        <img className='w-full h-[600px]' src="../assets/aot3.png" alt="Academy of Technology" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 sm:top-1/2 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8">
            <div className="text-white">
                <span id="counter1" className="text-6xl font-bold"></span>
            </div>
            <div className="text-white">
                <span id="counter2" className="text-6xl font-bold"></span>
            </div>
            <div className="text-white">
                <span id="counter3" className="text-6xl font-bold"></span>
            </div>
        </div>
    </div>
    );
}

export default Counter;
