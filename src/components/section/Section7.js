import React from 'react'
import Image from 'next/image';
import Line2 from '@/assets/line2.png'

export const Section7 = () => {
    return (
        <section className="h-[40vh] bg-center bg-cover pb-12 text-center px-8 mb-4">
            <div className="flex items-center justify-center pt-4" data-aos="fade-down" data-aos-delay="600">
                <Image
                    src={Line2}
                    alt="Vercel Logo"
                    className="w-auto h-12 rotate-180 transfrom"
                    width=''
                    height=''
                    priority
                />
            </div>
            <div className="flex flex-col items-center justify-center pt-4" data-aos="fade-down" data-aos-delay="600">
                <h1>
                Semoga kehadiran Tuan/Puan dapat menyerikan lagi majlis dan diberkati Allah SWT
                <br/>
                <br/>
                Terima Kasih
                </h1>
            </div>
            <div className="flex items-center justify-center pt-4" data-aos="fade-down" data-aos-delay="600">
            <Image
                src={Line2}
                alt="Vercel Logo "
                className="w-auto h-12 "
                width=''
                height=''
                priority
            />
            </div>
        </section>
    )
}
