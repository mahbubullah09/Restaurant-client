import axios from "axios";
import { config } from "localforage";
import { useNavigate } from "react-router-dom";
import useAuth from "./userAuth";


 const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { singout } = useAuth();
      // request interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use((config)=>{
        const token = localStorage.getItem('access-token')
        // console.log("stoped by interseptor", token);

        config.headers.authorization = `Bearer ${token}`
        return config
    },
    (error)=>{
        return Promise.reject(error);

    })

     // intercepts 401 and 403 status

     axiosSecure.interceptors.response.use((res)=>{
        return res
     },
     async (err)=>{
        const status = err.response.status
        // console.log("status error in the interseptor", status);
         // for 401 or 403 logout the user and move the user to the login
        if(status === 401 || status === 403){
            await singout();
            navigate('/login')

        }
        return Promise.reject(err)
     })
   
    return axiosSecure
};

export default useAxiosSecure;