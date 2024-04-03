import React from 'react';
import useCart from '../../hooks/useCart';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart()

    const axiosSecure = useAxiosSecure();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            toast.success("Delete from cart")
                            refetch()
                        }
                    })


            }
        });

    }
    return (
        <div className=' max-w-[992px] mx-auto'>

            <div className="flex justify-between">
                <h3 className='font-semibold text-3xl'>Total Order: {cart?.length} </h3>
                <h3 className='font-semibold text-3xl'>Total Price: ${totalPrice} </h3>
                {cart.length ?

                    <Link to={'/dashboard/payment'}><button className='bg-[#D1A054] text-lg font-semibold px-4 py-2 rounded-xl text-white'>Pay</button>  </Link>
                    :
                    <button disabled className='bg-[#D1A054]  text-lg font-semibold px-4 py-2 rounded-xl text-white'>Pay</button>

                }
            </div>

            <div>
                <div className="overflow-x-auto max-w-[980px] mx-auto my-4">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className='bg-[#D1A054] text-white border  '>
                                <th>SL</th>
                                <th>Item Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((data, idx) =>
                                    <tr className='text-black' key={data?._id}>
                                        <td>{idx + 1}</td>
                                        <td><img className='w-16' src={data?.image} alt="" /></td>
                                        <td>{data?.name}</td>
                                        <td>{data?.price}</td>
                                        <td><button onClick={() => handleDelete(data?._id)} className="px-2 py-2 bg-[#B91C1C] text-white text-2xl "><MdDelete /></button>
                                        </td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;