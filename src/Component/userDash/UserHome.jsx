import React, { useContext } from 'react';
import { AuthContex } from '../../provider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useCart from '../../hooks/useCart';

const UserHome = () => {

    const { user } = useContext(AuthContex)
    const userEmail = user?.email

    const axiosSecure = useAxiosSecure()

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



    const totalPrice = payments?.reduce((total, item) => total + item.price, 0)

    console.log(payments);


    const [cart] = useCart()
    return (
        <div className=' flex justify-center mt-10'>

            <div className="stats border border-lime-500  ">
                <div className="stat text-center">
                    <div className="text-lg font-bold ">Total Order</div>
                    <div className="stat-value text-[#003f5c]">{payments?.length}</div>
                </div>

                <div className="stat text-center">
                    <div className="text-lg font-bold ">Total Spend</div>
                    <div className="stat-value text-[#ffa600]">${totalPrice}</div>
                </div>

                <div className="stat text-center">
                    <div className="text-lg font-bold">Product in Cart</div>
                    <div className="stat-value text-[#bc5090] ">{cart?.length }</div>
                </div>

            </div>


        </div>
    );
};

export default UserHome;