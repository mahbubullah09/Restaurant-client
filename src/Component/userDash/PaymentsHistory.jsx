import { useState, useEffect, useContext } from 'react';
import { AuthContex } from '../../provider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ProductName from './productName';

const PaymentHistory = () => {


    const {user} = useContext(AuthContex)
    const axiosSecure = useAxiosSecure();
    const userEmail = user?.email; // Get user email

    // Fetch payment history using useQuery
    const { data: payments , refetch, isLoading, error } = useQuery({
        queryKey: ['payments', userEmail], // Cache payments based on userEmail
        queryFn: async () => {
            if (userEmail) {
                const res = await axiosSecure.get(`/payments/${userEmail}`);
                return res.data;
            }
            return [];
        },
        enabled: !!userEmail, // Only run the query if userEmail is available
    });

    if (isLoading) {
        return <div>Loading...</div>; // Show loading state
    }

 


//    console.log(payments);

   

    return (
        <div>
        <div className="overflow-x-auto max-w-[980px] mx-auto my-4">
            <table className="table text-center ">
                {/* head */}
                <thead>
                    <tr className='bg-[#D1A054] text-white border  '>
                        <th>SL</th>
                        <th>Items</th>
                        <th>Total Price</th>
                        <th>Date</th>
                     
                    </tr>
                </thead>
                <tbody className='text-xl'>
                    {
                        payments.map((data, idx) =>
                            <tr className='text-black' key={data?._id}>
                                <td className='font-bold text-2xl'>{idx + 1}</td>
                                <td><ProductName key={data?._id} Items={data.productsInfo}/></td>
                                <td className='font-bold text-4xl'>${data?.price}</td>
                                <td className='font-medium text-xl'>{data?.date}</td>
                               
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default PaymentHistory;
