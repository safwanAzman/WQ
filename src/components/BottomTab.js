import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowsRotate,faAddressBook,faPhoneVolume,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Kehadiran } from '@/components/tabform/Kehadiran';
import { BottomModal } from '@/components/BottomModal';
import { Hubungi } from '@/components/tabform/Hubungi';
import { Lokasi } from '@/components/tabform/Lokasi';

export const BottomTab = () => {
    const [tab,setTab] = useState( '0')
    return (
        <>
            { tab !== '2' && tab !== '3' && tab !== '4' ?
            <>
            <div className="sticky z-40 border-8 border-transparent bottom-6">
                <div className="flex items-center justify-around w-full py-4 text-sm shadow-2xl rounded-3xl bg-gradient-to-b from-black to-black">
                    <a 
                        onClick={()=>{
                            if(tab != '1'){
                                setTab('1')
                            }
                        }}
                        href="" className={`flex flex-col items-center justify-center space-y-2 cursor-pointer
                            ${tab  != '1' ? 'text-white' : 'text-white' } `}>
                        <FontAwesomeIcon  className="text-xl" icon={faArrowsRotate} />
                        <p>Refresh</p>
                    </a>
                    <a 
                        onClick={()=>{
                            if(tab != '2'){
                                setTab('2')
                            }
                        }}
                        href="#Rsvp"  className={`flex flex-col items-center justify-center space-y-2 cursor-pointer
                        ${tab  != '2' ? 'text-white' : 'text-white' } `}>
                        <FontAwesomeIcon className="text-xl" icon={faAddressBook} />
                        <p>Rsvp</p>
                    </a>
                    <a 
                        onClick={()=>{
                            if(tab != '3'){
                                setTab('3')
                            }
                        }}
                        href="#contact" className={`flex flex-col items-center justify-center space-y-2 cursor-pointer
                        ${tab  != '3' ? 'text-white' : 'text-white'  } `}>
                        <FontAwesomeIcon className="text-xl" icon={faPhoneVolume}/>
                        <p>Hubungi</p>
                    </a>
                    <a 
                        onClick={()=>{
                            if(tab != '4'){
                                setTab('4')
                            }
                        }}
                        href="#location" className={`flex flex-col items-center justify-center space-y-2 cursor-pointer
                        ${tab  != '4' ? 'text-white' : 'text-white'  } `}>
                        <FontAwesomeIcon className="text-xl" icon={faLocationDot}/>
                        <p>Lokasi</p>
                    </a>
                </div>
            </div>
            </>
            :null}
            {tab == '2'?
                <BottomModal title="Maklumat Kehadiran" onClick={()=>{setTab('0')}} setTabProps={tab}>
                    <Kehadiran onClick={()=>{setTab('0')}}/>
                </BottomModal>
            :null}

            {tab == '3'?
                <BottomModal title="Hubungi" onClick={()=>{setTab('0')}} setTabProps={tab}>
                    <Hubungi onClick={()=>{setTab('0')}}/>
                </BottomModal>
            :null}

            {tab == '4'?
                <BottomModal title="Lokasi" onClick={()=>{setTab('0')}} setTabProps={tab}>
                    <Lokasi onClick={()=>{setTab('0')}}/>
                </BottomModal>
            :null}
        </>
    )
}

