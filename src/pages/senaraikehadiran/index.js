import React, { 
    useState, 
    useEffect
} from 'react';
import callapi from '@/helper/axios';

const SenaraiKehadiran = () => {
    const [kehadiranData,setKehadiran] = useState([])

    const getData = async () => {
        try {
            const res = await callapi.get('/kehadiran/index');
            const data = await res.data;
            setKehadiran(data.data);
        } catch (e) {
            alert(e);
        }
    }
    
    useEffect(() => {
        getData();
    }, []);
    
    useEffect(() => {
    }, [kehadiranData]);
    return (
        <>
            <div className="flex flex-col px-2">
                <h1 className="py-4 text-2xl">Senarai Kehadiran</h1>
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 ">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-2 py-3 text-xs font-medium text-left text-gray-500 uppercase">
                                            No
                                        </th>
                                        <th scope="col" className="px-2 py-3 text-xs font-medium text-left text-gray-500 uppercase">
                                            Nama
                                        </th>
                                        <th scope="col" className="px-2 py-3 text-xs font-medium text-left text-gray-500 uppercase">
                                            Kehadiran
                                        </th>
                                        <th scope="col" className="px-2 py-3 text-xs font-medium text-left text-gray-500 uppercase">
                                            Jumlah Kehadiran
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {kehadiranData.map((item, index) => (
                                    <tr  key={index} className="odd:bg-white even:bg-gray-100 ">
                                        <td className="px-2 py-4 text-sm font-medium text-gray-800 whitespace-nowrap ">
                                            {index + 1}
                                        </td>
                                        <td className="px-2 py-4 text-sm font-medium text-gray-800 whitespace-nowrap ">
                                            {item.name}
                                        </td>
                                        <td className="px-2 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            {item.attendance}
                                        </td>
                                        <td className="px-2 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                                            {item.total}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SenaraiKehadiran