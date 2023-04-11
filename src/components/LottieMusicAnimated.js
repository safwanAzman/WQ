import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animate from '@/components/musicAnimate.json';

const LottieMusicAnimated = () => {
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

    return <div className="w-5 h-5 text-primary-300" ref={containerRef} />;
};

export default LottieMusicAnimated;