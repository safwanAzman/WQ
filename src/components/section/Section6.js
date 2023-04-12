import React,{useState} from 'react'
import { BottomModal } from '@/components/BottomModal';
import { Ucapan } from '@/components/tabform/Ucapan';

export const Section6 = () => {
    const [tab,setTab] = useState( '0')
    return (
        <>
        <section className="h-[60vh] bg-center bg-cover pb-12">
            <div className=""  data-aos="fade-down" data-aos-delay="200">
                <h1 className="pb-5 text-2xl font-medium text-center text-primary-500">Guestbook</h1>
                <div className="flex flex-col px-6 py-4 mx-5 overflow-auto border border-black rounded-lg bg-primary-50 h-[50vh] relative text-center">
                    <div className="py-4 border-b border-primary-200">
                        <h1 className="text-xl font-semibold text-primary-600">Nama</h1>
                        <h1>
                            Tahniah kepada pasangan mempelai yg sama cantik sama padan... 
                            Semoga perkahwinan ini menjadi saksi cinta kalian berdua.. selamat bercinta hingga ke jannah🌹
                        </h1>
                    </div>
                    <div className="py-4 border-b border-primary-200">
                        <h1 className="text-xl font-semibold text-primary-600">Nama</h1>
                        <h1>
                            Tahniah kepada pasangan mempelai yg sama cantik sama padan... 
                            Semoga perkahwinan ini menjadi saksi cinta kalian berdua.. selamat bercinta hingga ke jannah🌹
                        </h1>
                    </div>
                    <div className="py-4 border-b border-primary-200">
                        <h1 className="text-xl font-semibold text-primary-600">Nama</h1>
                        <h1>
                            Tahniah kepada pasangan mempelai yg sama cantik sama padan... 
                            Semoga perkahwinan ini menjadi saksi cinta kalian berdua.. selamat bercinta hingga ke jannah🌹
                        </h1>
                    </div>
                    

                    <div className="sticky bottom-0">
                        <button 
                            onClick={()=>{
                                if(tab != '1'){
                                    setTab('1')
                                }
                            }}
                            className="w-full px-8 py-3 text-sm font-medium transition bg-gray-800 rounded text-primary-100 hover:scale-100 focus:outline-none focus:ring active:bg-gray-700" type="submit">
                            Berikan Ucapan
                        </button>
                    </div>
                </div>
            </div>
        </section>

            {tab == '1'?
                <BottomModal title="Ucapan" onClick={()=>{setTab('0')}} setTabProps={tab}>
                    <Ucapan  onClick={()=>{setTab('0')}}/>
                </BottomModal>
            :null}
        </>
    )
}
