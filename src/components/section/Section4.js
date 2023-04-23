import React from 'react'
import {faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Section4 = () => {
    return (
        <section className="h-full mb-12 text-center text-white bg-center bg-cover myFont" >
            <div className=""  data-aos="fade-down" data-aos-delay="700">
                <h1 className="pb-5 text-3xl font-medium text-center myFont">Atur Cara Majlis</h1>
                <div className="flex flex-col px-2 py-4">
                    <h1 className="text-lg">Sabtu 16 Dec 1998</h1>

                    <div className="flex items-center justify-center mt-6 space-x-3">
                        <div className="px-4 py-2 ">
                            <p className="text-sm">Bermula</p>
                            <p className="text-base">11:30 am</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        <div className="px-4 py-2 ">
                            <p className="text-sm">Bersanding</p>
                            <p className="text-base"> 12:30 pm</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        <div className="px-4 py-2 ">
                            <p className="text-sm">Berakhir</p>
                            <p className="text-base"> 3:30 pm</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
