import { useState, useEffect, useContext } from 'react';
import { AuthContex } from '../../provider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ProductName from './productName';

const PaymentHistory = () => {
    const { user } = useContext(AuthContex);
    const axiosSecure = useAxiosSecure();
    const userEmail = user?.email; // Get user email

    // Fetch payment history using useQuery
    const { data: payments, refetch, isLoading, error } = useQuery({
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


    return (
        <div className="my-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">Payment History</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-center">
                    {/* Table head */}
                    <thead>
                        <tr className='bg-[#D1A054] text-[10px] md:text-base lg:text-lg text-white border'>
                            <th>SL</th>
                            <th>Items</th>
                            <th>Total Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    {/* Table body */}
                    <tbody className="text-[10px] md:text-xl my-4">
                        {payments?.map((data, idx) => (
                            <tr
                                className={`text-black  ${idx % 2 === 0 ? 'bg-slate-200' : ''}`}
                                key={data?._id}
                            >
                                <td className="font-bold text-[10px] md:text-xl lg:text-2xl">{idx + 1}</td>
                                <td>
                                    <ProductName key={data?._id} Items={data.productsInfo} />
                                </td>
                                <td className="font-bold text-[10px] md:text-xl">${data?.price}</td>
                                <td className="font-medium text-[10px] md:text-xl">{data?.date}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
