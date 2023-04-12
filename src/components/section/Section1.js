import React from 'react'
import Image from 'next/image';
import CardKhawin from '@/assets/mainCard.png'

export const Section1 = () => {
    return (
        <section className="h-[100vh] bg-center bg-cover pb-12">
            <Image
                src={CardKhawin}
                alt="Vercel Logo"
                className="w-full h-full"
                width={10000}
                height={10000}
                priority
            />
        </section>
    )
}
