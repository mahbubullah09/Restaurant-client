import React from 'react';
import useCart from '../../hooks/useCart';
import { MdDelete } from "react-icons/md";

const Cart = () => {
    const [cart] = useCart()

    const totalPrice = cart.reduce((total, item) => total + item.price ,0 )

    console.log(cart);
    return (
        <div >

            <div className="flex justify-around">
                <h3 className='font-semibold text-3xl'>Total Order: {cart?.length} </h3>
                <h3 className='font-semibold text-3xl'>Total Price: ${totalPrice} </h3>
                <button className='bg-[#D1A054] text-lg font-semibold px-4 py-2 rounded-xl text-white'>Pay</button>
            </div>

            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Item Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
  {
    cart.map((data) =>
        <tr className='text-black' key={data?._id}>
        <td><img className='w-16' src={data?.image} alt="" /></td>
        <td>{data?.name}</td>
        <td>{data?.price}</td>
        <td><button className="px-2 py-2 bg-[#B91C1C] text-white text-2xl "><MdDelete /></button>
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