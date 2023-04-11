import {useState} from 'react';
import { location } from '@/data/LocationData';


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
                        className="flex justify-center px-8 py-3 text-sm font-medium transition bg-gray-800 rounded text-primary-100 hover:scale-100 focus:outline-none focus:ring active:bg-gray-700"
                        >
                        Waze
                    </a>
                    <a
                        href={item.google}
                        className="flex justify-center px-8 py-3 text-sm font-medium transition bg-white border-2 rounded border-primary-500 text-primary-800 hover:scale-100 focus:outline-none focus:ring active:bg-primary-800"
                        >
                        Google Map
                    </a>
                </div>
            </div>
        ))}
        </>
    )
}