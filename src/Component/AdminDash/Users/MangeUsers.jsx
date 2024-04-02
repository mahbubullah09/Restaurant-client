import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const MangeUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
       

    })

    const handleAdmin =(id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make this user, admin?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make it!"
        })
        .then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                           toast.success("Asign as a admin")
                            refetch()
                        }
                    })


            }
        });


    }
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                           toast.success("Delete user")
                            refetch()
                        }
                    })


            }
        });

    }

    console.log(users);
    return (
        <div>
            <h2>Total Users : {users?.length}</h2>

            
            <div>
                <div className="overflow-x-auto max-w-[980px] mx-auto my-4">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className='bg-[#D1A054] text-white border  '>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((data, idx) =>
                                    <tr className='text-black' key={data?._id}>
                                        <td>{idx + 1}</td>
                                        <td>{data?.name} </td>
                                        <td>{data?.email}</td>
                                        <td>{data?.role?
                                        <h2> {data?.role}</h2>
                                        :
                                      <button onClick={()=>handleAdmin(data?._id)} className='bg-[#D1A054] text-white text-2xl p-2 '>  <FaUsers /></button>}</td>
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

export default MangeUsers;