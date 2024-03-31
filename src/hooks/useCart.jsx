import { useQueries, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";


const useCart = () => {

    const {user} = useContext(AuthContex)

    const axiosSecure = useAxiosSecure()
    const { data : cart=[], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }


    })

    return [cart, refetch]
};



export default useCart;