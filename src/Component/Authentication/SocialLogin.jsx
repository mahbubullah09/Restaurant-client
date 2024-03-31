import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContex } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
  
    const from = location.state?.from?.pathname || "/";

    const {googleLogin} = useContext(AuthContex)

    const axiosPublic = useAxiosPublic();
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(res=>{
           
            const userInfo ={
                name: res?.user?.displayName,
                email: res?.user?.email
            }
            axiosPublic.post('/users', userInfo)
            .then(result=>{
                console.log(result);
            })
            toast.success("Login Successfully")

        navigate(from, { replace: true })
        })
    }
    return (
        <div>
              <div className="divider my-4">Others</div>

              <div className="flex items-center justify-center">
              <button onClick={handleGoogleLogin} className="text-6xl"> <FcGoogle /></button>
              </div>

        </div>
    );
};

export default SocialLogin;