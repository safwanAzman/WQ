import React from 'react'
import MainBg from '@/assets/main.jpg'
import {faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Section1 = () => {
    return (
        <section className="relative h-screen pb-12 text-white bg-center bg-cover" 
            style={{ backgroundImage: `url(${MainBg.src})` }}>
            <div className="absolute inset-0 flex flex-col items-center pt-[10%] h-screen p-4 bg-black/70">
                <div className="space-y-16 text-center">
                    <div className="text-lg text-gray-200 myFont" data-aos="fade-down" data-aos-delay="100">
                        Walimatul Urus
                    </div>

                    <div className="space-y-2 font-medium text-center text-7xl mainfont" data-aos="fade-down" data-aos-delay="200">
                        <div>
                            <h1>Safwan</h1>
                        </div>
                        <div>
                            <h1>&</h1>
                        </div>
                        <div>
                            <h1>Asyqin</h1>
                        </div>
                    </div>
                    <div className="space-y-2 text-gray-200 myFont" data-aos="fade-down" data-aos-delay="250">
                        <div className="text-sm">
                            Mengundang untuk hadir dipernikahan kami pada<br/>
                            Minggu, 16 December 1998
                        </div>
                    </div>
                    <div className="flex justify-center" data-aos="fade-down" data-aos-delay="300">
                        <a href="#ucapansection" className="flex items-center justify-center px-8 py-3 space-x-2 text-base text-white border rounded-lg ">
                            <p>Ucapan</p>
                            <FontAwesomeIcon icon={faArrowDown} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
