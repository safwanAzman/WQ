import {useState} from 'react';
import { location } from '@/data/locationData';


export const Lokasi = ({onClick}) => {
    return (
        <>
        {location.map((item, index) => (
            <div key={index} className='px-4 pt-5'>
                {/* <iframe 
                    className="w-full"
                    src={item.map}
                    height="330" 
                    >
                </iframe> */}
                <iframe 
                    className="w-full"
                    src="https://www.google.com/maps/d/embed?mid=1jV-nnG7E6mJzZ-fSntVxJR8sHj4&hl=en&ehbc=2E312F" 
                    height="330"
                >

                </iframe>
                <div className="mt-4 space-y-2">
                    <a
                        href={item.waze}
                        className="flex justify-center px-8 py-3 text-sm font-medium text-white transition bg-black rounded hover:scale-100 focus:outline-none "
                        >
                        Waze
                    </a>
                    <a
                        href={item.google}
                        className="flex justify-center px-8 py-3 text-sm font-medium text-black transition bg-white border-2 border-black rounded hover:scale-100 focus:outline-none"
                        >
                        Google Map
                    </a>
                </div>
            </div>
        ))}
        </>
    )
}