import React from 'react'
import Image from 'next/image';
import BgSection3 from '@/assets/bgsection3.png'

export const Section3 = () => {
    return (
        <section className="h-[40vh] bg-center bg-cover mb-12 flex flex-col items-center justify-center text-center"
            style={{ backgroundImage: `url(${BgSection3.src})` }}>
                <div className="space-y-1 " data-aos="fade-down" data-aos-delay="700">
                        <h1 className="text-3xl">بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ</h1>
                        <div className="px-5 pt-4">
                            <h1>
                            Ya Allah, berkatilah majlis perkahwinan ini, limpahkanlah baraqah dan rahmat 
                            kepada kedua mempelai ini,
                            Kurniakanlah mereka zuriat yang soleh dan solehah. Kekalkanlah jodoh mereka 
                            di dunia dan di akhirat dan 
                            empurnakanlah agama mereka dengan berkat ikatan ini.
                            </h1>
                        </div>
                </div>
        </section>
    )
}
