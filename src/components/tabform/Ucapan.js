import {useState} from 'react';
import { Input } from '@/components/form/Input';


export const Ucapan = ({onClick}) => {
    return (
        <>
            <div className='px-4 pt-5'>
                <Input
                    type="text"
                    placeholder="Nama"
                    label="Nama"
                />
                <div className="mb-4">
                    <label  className="block pb-1 text-xs font-medium text-gray-700">
                        Ucapan
                    </label>
                    <textarea rows="7" className="form-style"></textarea>
                </div>
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
                        <p>Pastikan anda isi semua ruangan diatas</p>
                    </div>
                </div>
            </div>
        </>
    )
}

