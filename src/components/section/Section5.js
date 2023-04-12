import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Img1 from '@/assets/img1.jpg'
import Img2 from '@/assets/img2.jpg'
import Img3 from '@/assets/img3.jpg'
import { Carousel } from 'react-responsive-carousel';

export const Section5 = () => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date('2024-04-04T00:00:00');
        const countdown = setInterval(() => {
            const currentTime = new Date().getTime();
            const distance = targetDate - currentTime;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeRemaining({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    return (
        <section className="h-full mx-5 mb-12 bg-center bg-cover ">
            <div className=""  data-aos="fade-down" data-aos-delay="200">
                <h1 className="pb-5 text-2xl font-medium text-center text-primary-500">Menghitung Hari</h1>

                <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col items-center justify-center p-4 border border-b-[6px] rounded-lg border-primary-400">
                        <h1 className="text-4xl text-primary-500">{timeRemaining.days}</h1>
                        <p className="text-sm text-primary-400">Hari</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 border border-b-[6px] rounded-lg border-primary-400">
                        <h1 className="text-4xl text-primary-500">{timeRemaining.hours}</h1>
                        <p className="text-sm text-primary-400">Jam</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 border border-b-[6px] rounded-lg border-primary-400">
                        <h1 className="text-4xl text-primary-500">{timeRemaining.minutes}</h1>
                        <p className="text-sm text-primary-400">Minit</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 border border-b-[6px] rounded-lg border-primary-400">
                        <h1 className="text-4xl text-primary-500">{timeRemaining.seconds}</h1>
                        <p className="text-sm text-primary-400">Saat</p>
                    </div>
                </div>
                <div className="mt-8">
                <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} dynamicHeight>
                    <div>
                        <Image
                            src={Img1}
                            alt="Vercel Logo"
                            className="w-auto h-[23rem]"
                            width={500}
                            height={500}
                            priority
                        /> 
                    </div>
                    <div>
                        <Image
                            src={Img2}
                            alt="Vercel Logo"
                            className="w-auto h-[23rem]"
                            width={500}
                            height={500}
                            priority
                        /> 
                    </div>
                    <div>
                        <Image
                            src={Img3}
                            alt="Vercel Logo"
                            className="w-auto h-[23rem]"
                            width={500}
                            height={500}
                            priority
                        /> 
                    </div>
                </Carousel>
                {/* <Image
                    src={Img1}
                    alt="Vercel Logo"
                    className="w-auto h-full"
                    width=''
                    height=''
                    priority
                /> */}
                </div>
            </div>
        </section>
    )
}
