import {useState} from 'react';
import Link from 'next/link';
import { Input } from '@/components/form/Input';
import callapi from '@/helper/axios';
import { Formik } from 'formik';
import { toast } from 'react-toastify';


export const Kehadiran = ({onClick}) => {
    const [kehadiran,setKehadiran] = useState( '')
    const [loading, setLoading] = useState(false);
    
    const sumbit = async (values) => {
        try {
            setLoading(true);
            const res = await callapi.post('/kehadiran/create',values);
            const data = await res.data;
            onClick();
            toast("🫰 Maklumat anda telah berjaya dihantar 🫰");
            setLoading(false);
        } catch (e) {
            alert(e);
            setLoading(false);
        }
    }

    return (
        <>
        <Formik
            initialValues={{
                name:"", 
                no_tel: "",
                attendance: "",
                total: "",
                
            }}
            onSubmit={(values,actions)=>{ 
                sumbit(values);
            }}
            >
            {({ handleChange, handleSubmit,setFieldValue}) => (
            <>
                <div className='px-4 pt-5'>
                    <div className="flex items-start justify-end -mt-4">
                    <Link  href='/senaraikehadiran' >
                        <h1 className="text-xs text-indigo-600 border-b border-indigo-600">Lihat Senarai Kehadiran</h1>
                    </Link>
                    </div>
                    <Input
                        type="text"
                        placeholder="Nama"
                        label="Nama"
                        id="name"
                        onChange={handleChange}
                    />
                    <Input
                        type="number"
                        placeholder="Tel No"
                        label="Tel No"
                        inputmode="numeric"
                        id="no_tel"
                        onChange={handleChange}
                    />
                    <div className="mb-4">
                    <label  className="block text-xs font-medium text-gray-700">
                        Kehadiran
                    </label>
                        <div className="grid grid-cols-2 gap-2 pt-1">
                            <button 
                                onClick={()=>{
                                    if(kehadiran != 'hadir'){
                                        setKehadiran('hadir')
                                        setFieldValue('attendance', 'Hadir');
                                    }
                                }}
                                className={`flex items-center justify-center p-4 text-sm border rounded-lg 
                                ${kehadiran == 'hadir' ?  'bg-primary-200 ' : 'bg-white'}`}
                                >
                                Hadir
                            </button>
                            <button 
                                onClick={()=>{
                                    if(kehadiran != 'tidak'){
                                        setKehadiran('tidak')
                                        setFieldValue('attendance', 'Tidak');
                                    }
                                }}
                                className={`flex items-center justify-center p-4 text-sm border rounded-lg
                                ${kehadiran == 'tidak' ?  'bg-primary-200 ' : 'bg-white'}`}
                                >
                                Tidak
                            </button>
                        </div>
                    </div>
                    <Input
                        type="number"
                        placeholder="Jumlah"
                        label="Jumlah"
                        extraLabel="Masukkan Jumlah Kehadiran termasuk anda"
                        inputmode="numeric"
                        id="total"
                        onChange={handleChange}
                    />
                    <div className="mt-8">
                    <button
                        onClick={()=>{
                            handleSubmit();
                        }}
                        className="w-full px-8 py-3 text-sm font-medium transition bg-gray-800 rounded text-primary-100 hover:scale-100 focus:outline-none focus:ring active:bg-gray-700"
                        type="submit"
                        >
                        {loading ? 'Loading...' : 'Hantar'}
                    </button>
                    <div className="pt-2 text-sm text-center text-primary-600">
                        <p>Pastikan anda isi & pilih semua ruangan diatas</p>
                    </div>
                    </div>
                </div>
            </>
            )}
            </Formik>
        </>
    )
}

