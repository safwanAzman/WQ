import {useState} from 'react';
import { Input } from '@/components/form/Input';
import callapi from '@/helper/axios';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from "yup";


export const Ucapan = ({onClick,onSubmitted}) => {
    const [loading, setLoading] = useState(false);

    const validate = Yup.object().shape({
        nama: Yup.string().required("Nama Required"),
        ucapan: Yup.string().required("Ucapan Required"),
    });
    
    const sumbit = async (values) => {
        try {
            setLoading(true);
            const res = await callapi.post('/ucapan/create',values);
            const data = await res.data;
            onClick();
            onSubmitted();
            toast(" 🫰 Terima kasih atas ucapan anda 🫰");
            setLoading(false);
        } catch (e) {
            alert(e);
            setLoading(false);
        }
    }

    return (
        <>
            <Formik
                validationSchema={validate}
                initialValues={{
                    nama:"", 
                    ucapan: ""
                }}
                onSubmit={(values,actions)=>{  
                    sumbit(values);
                }}
                >
                {({ handleChange, handleSubmit,errors,touched}) => (
                    <>
                        <div className='px-4 pt-5'>
                            <Input
                                type="text"
                                placeholder="Nama"
                                label="Nama"
                                onChange={handleChange}
                                id='nama'
                                errorMessage={errors.nama && touched.nama ? errors.nama : null}
                            />
                            <div className="mb-4">
                                <label  className="block pb-1 text-xs font-medium text-gray-700">
                                    Ucapan
                                </label>
                                <textarea 
                                    onChange={handleChange}
                                    id='ucapan'
                                    rows="7" 
                                    className="form-style"></textarea>
                                <p className="text-xs text-red-500">{errors.ucapan && touched.ucapan ? errors.ucapan : null}</p>
                            </div>
                            <div className="mt-8">
                            <button
                                onClick={()=>{
                                    handleSubmit();
                                }}
                                className="w-full px-8 py-3 text-sm font-medium text-white transition bg-black rounded hover:scale-100 focus:outline-none "
                                type="submit"
                                >
                                {loading ? 'Loading...' : 'Hantar'}
                            </button>
                                <div className="pt-2 text-sm text-center text-primary-600">
                                    <p>Pastikan anda isi semua ruangan diatas</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Formik>
        </>
            
    )
}

