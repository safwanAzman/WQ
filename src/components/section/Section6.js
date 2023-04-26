import React,{useState,useEffect,useCallback} from 'react'
import { BottomModal } from '@/components/BottomModal';
import { Ucapan } from '@/components/tabform/Ucapan';
import callapi from '@/helper/axios';
import {faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LottieUcapanAnimated from '@/components/LottieUcapanAnimated';


export const Section6 = () => {
    const [tab, setTab] = useState('0');
    const [ucapanData, setUcapan] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await callapi.get('/ucapan/safwan/index');
            const data = await res.data;
            setUcapan(data.data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }, []);

    const onUcapanSubmitted = () => {
        getData();
    };

    useEffect(() => {
        getData();
    }, [getData]);
    return (
        <>
        <section className="h-[60vh] mt-40  bg-center bg-cover  myFont text-white" id="ucapansection">
            <div className=""  data-aos="fade-down" data-aos-delay="200">
                <h1 className="pb-6 text-3xl font-medium text-center text-primary">Guestbook</h1>
                <div className="flex flex-col mx-5 overflow-auto border rounded-lg  h-[50vh] relative text-center">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <div>Loading...</div>
                            </div>
                        ) : ucapanData.length === 0 ? (
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <div>Sila Berikan Ucapan Anda</div>
                                <LottieUcapanAnimated/>
                            </div>
                        ) : (
                            ucapanData.map((entry, index) => (
                                <div key={index}  className="px-6">
                                    <div className="py-4 border-b border-primary-900 ">
                                        <h1 className="text-xl font-semibold text-primary">{entry.nama}</h1>
                                        <h1 className="text-gray-300">{entry.ucapan}</h1>
                                    </div>
                                </div>
                            ))
                        )}

                    <div className="sticky bottom-0 w-full px-2 py-2">
                        <button 
                            onClick={()=>{
                                if(tab != '1'){
                                    setTab('1')
                                }
                            }}
                            className="flex items-center justify-center w-full px-8 py-3 text-sm font-medium text-white transition bg-black border rounded bg-primary hover:scale-100" type="submit">
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
