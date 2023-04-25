import React from 'react'
import Image from 'next/image';

export const Section7 = () => {
    return (
        <section className="h-[40vh] bg-center bg-cover pt-14 pb-12 text-center px-8  myFont text-white relative  ">
            <div className="flex flex-col items-center justify-center pt-4" data-aos="fade-down" >
                <h1>
                Semoga kehadiran Tuan/Puan dapat menyerikan lagi majlis dan diberkati Allah SWT
                <br/>
                <br/>
                Terima Kasih.
                </h1>
            </div>

            <div className='flex justify-center pt-10 pb-2 text-xs text-center '  data-aos="fade-down" data-aos-duration="500">
                <p>&copy; Coded by </p> <a href="https://portfolio-v2-self.vercel.app/"  target="_blank"className="pl-1 border-b"> SafwanAzman</a>
            </div>
        </section>
    )
}
