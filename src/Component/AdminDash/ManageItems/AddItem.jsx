import React from 'react';
import SharedTitele from '../../SharedComponent/SharedTitle';
import { PiForkKnifeFill } from "react-icons/pi";
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';




const imageHostingKey = import.meta.env.VITE_ImageHostingKey;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
const AddItem = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(imageHostingAPI, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        console.log(res.data);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            console.log(menuItem);
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    }

    return (
        <div>
            <SharedTitele heading={'ADD AN ITEM'} subHeading={"What's new"}></SharedTitele>


            <div className='bg-[#F3F3F3] m-8 p-10'>

                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    <div className='w-full space-y-2 '>
                        <h2>Recipe name*</h2>
                        <input className='w-full p-3' placeholder='Recipe name'
                            {...register("name", { required: true })} />
                        {errors.name?.type === "required" && (
                            <p role="alert" className='text-red-700'> Name is required*</p>
                        )}
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='w-full space-y-2'>
                            <h2>Category*</h2>
                            <select  {...register("category", { required: true })} className="select select-bordered w-full  ">
                                <option value="" >Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                                <option value="drinks">popular</option>
                            </select>
                            {errors.category?.type === "required" && (
                                <p role="alert" className='text-red-700'> Category is required*</p>
                            )}

                        </div>
                        <div className='w-full space-y-2'>
                            <h2>Price*</h2>
                            <input className='w-full p-3' type='number' placeholder='price'
                                {...register("price", { required: true })} />
                            {errors.price?.type === "required" && (
                                <p role="alert" className='text-red-700'> Price is required*</p>
                            )}
                        </div>



                    </div>
                    <div className='space-y-2'>
                        <h2>Recipe Details*</h2>
                        <textarea className='w-full h-36 p-3' placeholder='Recipe details'
                            {...register("recipe", { required: true })} />
                        {errors.recipe?.type === "required" && (
                            <p role="alert" className='text-red-700'> Recipe is required*</p>
                        )}
                    </div>

                    <div className="form-control w-full my-6 space-y-2">
                        <h2>Image*</h2>
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                        {errors.image?.type === "required" && (
                            <p role="alert" className='text-red-700'> Image is required*</p>
                        )}
                    </div>
                    <button className='bg-gradient-to-tr from-[#835D23] to-[#B58130] py-2 px-4 text-white flex gap-1 items-center text-lg'>Add Item <PiForkKnifeFill /></button>
                </form>

            </div>

        </div>
    );
};

export default AddItem;