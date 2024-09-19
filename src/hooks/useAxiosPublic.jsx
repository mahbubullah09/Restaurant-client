import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://resturant-server-ashen.vercel.app'
})
const useAxiosPublic = () => {

    return axiosPublic

    
};

export default useAxiosPublic;