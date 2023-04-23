import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animate from '@/components/ucapanAnimate.json';

const LottieUcapanAnimated = () => {
const containerRef = useRef(null);

useEffect(() => {
    const container = containerRef.current;

    const animation = lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animate,
    });

    return () => {
    animation.destroy();
    };
}, []);

    return <div className="w-auto mt-4 h-52 text-primary" ref={containerRef} />;
};

export default LottieUcapanAnimated;