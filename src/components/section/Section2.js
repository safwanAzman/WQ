import React from 'react'
import Image from 'next/image';
import CardKhawin from '@/assets/mainCard.png'
import Bismillah from '@/assets/bismillah.png'
import Line from '@/assets/line.png'
import Line2 from '@/assets/line2.png'
import {faClock,faCalendar,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Section2 = () => {
    return (
        <section className="h-full pb-12 bg-center bg-cover"
            style={{ backgroundImage: `url(https://i.gifer.com/33Hn.gif)` }}
            >
            <div  className="flex flex-col items-center justify-center text-center">
                <div className="px-8 py-2">
                    <div data-aos="fade-down" data-aos-delay="400">
                    <Image
                        src={Bismillah}
                        alt="Vercel Logo"
                        className=''
                        width={500}
                        height=''
                        priority
                    />
                    </div>
                    <div className="flex items-center justify-center" data-aos="fade-down" data-aos-delay="600">
                    <Image
                        src={Line}
                        alt="Vercel Logo"
                        className="w-auto h-12"
                        width=''
                        height=''
                        priority
                    />
                    </div>
                    <div className="pt-4 space-y-1" data-aos="fade-down" data-aos-delay="700">
                        <h1>Dengan penuh Kesyukuran,kami</h1>
                        <div className="pt-4 font-semibold text-stone-500">
                        <h1>HJ AZMAN BIN RAFIEI</h1>
                        <h1>&</h1>
                        <h1>SITI ROZITA BINTI ISMAIL</h1>
                        </div>
                        <div className="pt-4">
                        <h1>
                            Menjemput Yang Berbahagia Tan Sri/ Puan Sri/ Dato Seri/ 
                            Datin Seri/ Dato/ Datin/ Tuan/ Puan/ Encik/ Cik ke majlis
                            perkahwinan putera kami
                        </h1>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center h-40 mt-4 space-y-1 border-2 rounded-lg border-primary-400" 
                    data-aos="fade-down" data-aos-delay="700"
                    style={{ backgroundImage: `url(${CardKhawin.src})` }}
                    >
                    <div className="absolute inset-0 border-2 rounded-lg bg-primary-600/70"></div>
                    <div className="z-40 font-semibold uppercase text-primary-100">
                        <h1>Muhammad Safwan Bin Azman</h1>
                        <h1>&</h1>
                        <h1>Nurul Asyqin Binti Mohd Nazri</h1>
                        </div>
                    </div>
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
                        <div className="pb-6 text-center">
                            <FontAwesomeIcon  className="text-2xl text-primary-500" icon={faCalendar} />
                            <h1>Sabtu, 00 Mac 0000</h1>
                        </div>
                        <div className="pb-6 text-center">
                            <FontAwesomeIcon  className="text-2xl text-primary-500" icon={faClock} />
                            <h1>11:30 pg - 3:30 ptg</h1>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon  className="text-2xl text-primary-500" icon={faLocationDot} />
                            <h1>
                            Kampung konoha 
                            2-8-1 Nishi-Shinjuku, Shinjuku-ku
                            163-8001 Tokyo
                            日本
                            </h1>
                        </div>
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
                </div>
            </div>
        </section>
    )
}
