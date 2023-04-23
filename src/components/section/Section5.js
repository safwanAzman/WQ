import React, { useState, useEffect } from 'react';

export const Section5 = () => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date('2022-04-04T00:00:00');
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
        <div>
        <section className="mx-5 mb-12 bg-center bg-cover h-96 myFont">
        <h1 className="pb-12 text-3xl font-medium text-center text-primary-100">Menghitung Hari</h1>
            <div className="flex flex-col items-center justify-center sliding-background"  data-aos="fade-down" data-aos-delay="200">
                <div className="grid grid-cols-4 gap-2 px-4">
                    <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-black/80 ">
                        <h1 className="text-4xl text-primary-100">{timeRemaining.days}</h1>
                        <p className="text-sm text-primary-100">Hari</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-black/80">
                        <h1 className="text-4xl text-primary-100">{timeRemaining.hours}</h1>
                        <p className="text-sm text-primary-100">Jam</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-black/80">
                        <h1 className="text-4xl text-primary-100">{timeRemaining.minutes}</h1>
                        <p className="text-sm text-primary-100">Minit</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-black/80">
                        <h1 className="text-4xl text-primary-100">{timeRemaining.seconds}</h1>
                        <p className="text-sm text-primary-100">Saat</p>
                    </div>
                </div>

                
                <div className="mt-8">
                </div>
            </div>
        </section>
        </div>
    )
}
