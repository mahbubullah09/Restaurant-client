import React from 'react';
import useAuth from '../../hooks/userAuth';
import Swal from 'sweetalert2';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const FoodCard = ({ data }) => {

    const axiosSecure = useAxiosSecure();

    const navigate = useNavigate()
    const location = useLocation()


    const {user} = useAuth()
   
    const handleCart = food =>{
       

        if(user && food) {
          
            const info = {
                menuId: data?._id,
                email: user?.email,
                name: data?.name,
                image: data?.image,
                price: data?.price
            }
            console.log(info);

            axiosSecure.post('/carts', info)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    toast.success(`${data?.name} added to cart`)
                }
            })

        }

        else{
            Swal.fire({
                title: "Are you sure?",
                text: "You have to login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, log in!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from : location}})
                }
              });

        }
    }
    return (
        <div className='bg-[#F3F3F3] max-w-[370px]'>

            <img src={data?.image} alt="" />
            <div className='text-center p-6 '>
                <h2 className=' text-2xl font-semibold '>{data?.name}</h2>
                <p className=' text-left text-[#737373] my-2 '>{data?.recipe}</p>
                <button onClick={() => handleCart(data)} className='  uppercase py-2 px-4 bg-black text-[#BB8506] text-lg font-medium rounded-lg border-[#BB8506] border-b-4 hover:bg-[#E8E8E8] text-center'>add to card</button>
            </div>


        </div>
    );
};

export default FoodCard;