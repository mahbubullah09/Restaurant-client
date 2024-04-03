import {  useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";


const useCart = () => {

    const {user, loading} = useContext(AuthContex)

    const axiosSecure = useAxiosSecure()
    const { data : cart=[], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }


    })

    return [cart, refetch]
};



export default useCart;