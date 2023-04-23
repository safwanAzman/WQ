import React from 'react'
import {faClock,faCalendar,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Section2 = () => {
    return (
        <section className="h-full mb-12 text-white bg-center bg-cover myFont"
            style={{ backgroundImage: `url(https://i.pinimg.com/originals/56/11/00/561100d825be6409e6112ba1ae31dd38.gif)` }}
            >
            <div  className="flex flex-col items-center justify-center text-center bg-black/80">
                <div className="px-8 py-2">
                    <div data-aos="fade-down" data-aos-delay="400">
                    <h1 className="pt-12 pb-8 text-3xl">بِسْمِ اللَّـهِ الرَّ‌حْمَـٰنِ الرَّ‌حِيمِ</h1>
                    </div>
                    
                    <div className="pt-8 space-y-1 " data-aos="fade-down" data-aos-delay="700">
                        <h1>Dengan penuh Kesyukuran,kami</h1>
                        <div className="pt-4 font-bold text-stone-100">
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
                    <div className="relative flex items-center justify-center h-40 mt-4 space-y-1 bg-center bg-cover border-2 rounded-lg border-primary-400" 
                    data-aos="fade-down" data-aos-delay="700"
                    // style={{ backgroundImage: `url(https://i.pinimg.com/originals/32/e1/5f/32e15fb39b66f158dfab51a3f61c0a37.gif)` }}
                    >
                    <div className="absolute inset-0 border-2 rounded-lg bg-black/80"></div>
                    <div className="z-40 font-semibold uppercase text-primary-100">
                        <h1>Muhammad Safwan Bin Azman</h1>
                        <h1>&</h1>
                        <h1>Nurul Asyqin Binti Mohd Nazri</h1>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center py-12" data-aos="fade-down" >
                        <div className="pb-6 text-center">
                            <FontAwesomeIcon  className="text-2xl text-primary-100" icon={faCalendar} />
                            <h1>Sabtu, 00 Mac 0000</h1>
                        </div>
                        <div className="pb-6 text-center">
                            <FontAwesomeIcon  className="text-2xl text-primary-100" icon={faClock} />
                            <h1>11:30 pg - 3:30 ptg</h1>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon  className="text-2xl text-primary-100" icon={faLocationDot} />
                            <h1>
                            Kampung konoha 
                            2-8-1 Nishi-Shinjuku, Shinjuku-ku
                            163-8001 Tokyo
                            日本
                            </h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
