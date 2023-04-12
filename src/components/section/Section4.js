import React from 'react'

export const Section4 = () => {
    return (
        <section className="h-full mb-12 bg-center bg-cover " >
            <div className=""  data-aos="fade-down" data-aos-delay="700">
                <h1 className="pb-5 text-2xl font-medium text-center text-primary-500">Aturcara Majlis</h1>
                <div className="flex flex-col px-6 py-4 mx-5 border border-black rounded-lg bg-primary-50">
                    <div>
                        <div className="p-4 text-left text-white bg-primary-500">
                            <h1>Sabtu, 00 Mac 0000</h1>
                        </div>
                        <ol className="relative pt-8 text-gray-500 border-l border-primary-400 "> 
                        <li className="mb-10 ml-6">            
                            <span className="absolute flex items-center justify-center w-4 h-4 rounded-full bg-primary-200 -left-2 ring-2 ring-primary-400 animate-pulse ">
                            </span>
                            <h3 className="font-semibold leading-tight">Majlis bermula</h3>
                            <p className="text-sm">11:30 am</p>
                        </li>                 
                        <li className="mb-10 ml-6">            
                            <span className="absolute flex items-center justify-center w-4 h-4 rounded-full bg-primary-200 -left-2 ring-2 ring-primary-400 animate-pulse">
                            </span>
                            <h3 className="font-semibold leading-tight">Bersanding</h3>
                            <p className="text-sm">12:30 pm</p>
                        </li>
                        <li className="mb-4 ml-6">
                            <span className="absolute flex items-center justify-center w-4 h-4 rounded-full bg-primary-200 -left-2 ring-2 ring-primary-400 animate-pulse">
                            </span>
                            <h3 className="font-semibold leading-tight">Majlis berakhir</h3>
                            <p className="text-sm">3:30 pm</p>
                        </li>
                    </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}
