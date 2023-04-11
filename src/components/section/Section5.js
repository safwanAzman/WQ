import React from 'react'
import Image from 'next/image';
import Img1 from '@/assets/img1.png'

export const Section5 = () => {
    return (
        <section className="h-full mx-5 mb-12 bg-center bg-cover ">
            <div className=""  data-aos="fade-down" data-aos-delay="200">
                <h1 className="pb-5 text-2xl font-medium text-center text-primary-500">Menghitung Hari</h1>

                <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col items-center justify-center p-4 border border-b-4 rounded-lg border-primary-400">
                        <h1 className="text-4xl text-primary-500">0</h1>
                        <p className="text-sm text-primary-400">Hari</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 border border-b-4 rounded-lg border-primary-400">
                        <h1 className="text-4xl text-primary-500">0</h1>
                        <p className="text-sm text-primary-400">Jam</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 border border-b-4 rounded-lg border-primary-400">
                        <h1 className="text-4xl text-primary-500">0</h1>
                        <p className="text-sm text-primary-400">Minit</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 border border-b-4 rounded-lg border-primary-400">
                        <h1 className="text-4xl text-primary-500">0</h1>
                        <p className="text-sm text-primary-400">Saat</p>
                    </div>
                </div>

                <div className="mt-4">
                <Image
                    src={Img1}
                    alt="Vercel Logo"
                    className="w-auto h-full"
                    width=''
                    height=''
                    priority
                />
                </div>
            </div>
        </section>
    )
}
