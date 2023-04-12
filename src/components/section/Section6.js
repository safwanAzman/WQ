import React,{useState,useEffect} from 'react'
import { BottomModal } from '@/components/BottomModal';
import { Ucapan } from '@/components/tabform/Ucapan';
import callapi from '@/helper/axios';
import {faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Section6 = () => {
    const [tab,setTab] = useState( '0')
    const [ucapanData,setUcapan] = useState([])

    const getData = async () => {
        try {
            const res = await callapi.get('/ucapan/index');
            const data = await res.data;
            setUcapan(data.data);
        } catch (e) {
            alert(e);
        }
    }
    
    useEffect(() => {
        getData();
    }, []);

    const onUcapanSubmitted = () => {
        getData();
    };

    useEffect(() => {
    }, [ucapanData]);
    return (
        <>
        <section className="h-[60vh] bg-center bg-cover pb-12">
            <div className=""  data-aos="fade-down" data-aos-delay="200">
                <h1 className="pb-5 text-2xl font-medium text-center text-primary-500">Guestbook</h1>
                <div className="flex flex-col mx-5 overflow-auto border border-black rounded-lg bg-primary-50 h-[50vh] relative text-center">
                    {ucapanData.map((entry, index) => (
                        <div key={index}  className="px-6 py-4 ">
                            <div className="py-4 border-b border-primary-200 ">
                                <h1 className="text-xl font-semibold text-primary-600">{entry.nama}</h1>
                                <h1 className="">{entry.ucapan}</h1>
                            </div>
                        </div>
                    ))}
                    <div className="sticky bottom-0 px-2 py-2">
                        <button 
                            onClick={()=>{
                                if(tab != '1'){
                                    setTab('1')
                                }
                            }}
                            className="flex items-center justify-center w-full px-8 py-3 text-sm font-medium transition bg-gray-800 rounded text-primary-100 hover:scale-100 focus:outline-none focus:ring active:bg-gray-700" type="submit">
                            <div className="animate__animated animate__swing animate__infinite">
                                <FontAwesomeIcon className="mr-3 text-xl text-white " icon={faHandPointRight} />
                            </div>
                            Berikan Ucapan
                        </button>
                    </div>
                </div>
            </div>
        </section>

            {tab == '1'?
                <BottomModal title="Ucapan" onClick={()=>{setTab('0')}} setTabProps={tab}>
                    <Ucapan  onClick={()=>{setTab('0')}} onSubmitted={onUcapanSubmitted}/>
                </BottomModal>
            :null}
        </>
    )
}
