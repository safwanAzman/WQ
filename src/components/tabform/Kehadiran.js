import {useState} from 'react';
import { Input } from '@/components/form/Input';


export const Kehadiran = ({onClick}) => {
    const [kehadiran,setKehadiran] = useState( '')
    return (
        <>
            <div className='px-4 pt-5'>
                <Input
                    type="text"
                    placeholder="Nama"
                    label="Nama"
                />
                <Input
                    type="number"
                    placeholder="Tel No"
                    label="Tel No"
                    inputmode="numeric"
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
                />
                <div className="mt-8">
                <button
                    onClick={()=>{
                        onClick();
                    }}
                    className="w-full px-8 py-3 text-sm font-medium transition bg-gray-800 rounded text-primary-100 hover:scale-100 focus:outline-none focus:ring active:bg-gray-700"
                    type="submit"
                    >
                    Hantar
                </button>
                    <div className="pt-2 text-sm text-center text-primary-600">
                        <p>Pastikan anda isi & pilih semua ruangan diatas</p>
                    </div>
                </div>
            </div>
        </>
    )
}

