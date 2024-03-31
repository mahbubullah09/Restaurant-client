import { Link, useLocation, useNavigate } from 'react-router-dom';
import bg from '../../assets/others/authentication.png'
import img from '../../assets/others/authentication2.png'
import { useContext, useState } from 'react';
import { AuthContex } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {

  const { singin } = useContext(AuthContex)

  const [click, setClick] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  console.log(location);

  const handleLogin = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    singin(email, password)
      .then(result => {
        result.user
        console.log(result.user)
        toast.success("Login Successfully")

        navigate(from, { replace: true })
      })


  }
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='min-h-[100vh] py-12 lg:py-28'>

      <div
        className='flex flex-col md:flex-row items-center justify-center gap-4  max-w-[1650px]  mx-auto py-12  p-4 px-2 lg:px-20'>

        <div>
          <img className='w-full hidden lg:block' src={img} alt="" />
        </div>

        <div style={{ backgroundImage: `url(${bg})` }}
          className='w-full  shadow-2xl md:w-1/2 p-2 lg:p-10  '>
          <h2 className='text-center text-4xl font-bold'>Login</h2>
          <form onSubmit={handleLogin}>
            <div className='flex flex-col my-8 w-3/4 mx-auto'>
              <label className='text-xl font-semibold my-2'>Email</label>
              <input placeholder='Enter your Email' type="text" name="email" className='p-2  ' id="" />
            </div>
            <div className='flex flex-col my-8 w-3/4 mx-auto'>
              <label className='text-xl font-semibold my-2'>Password</label>

              <div className=' relative'>
                <input placeholder='Enter your Password' type={click ? "text" : "password"} name="password" className='p-2 border w-full   ' id="" />
                {!click ?
                  <FaEyeSlash onClick={() => setClick(!click)} className='absolute right-2 top-3 cursor-pointer' />
                  :
                  <FaEye onClick={() => setClick(!click)} className='absolute right-2 top-3 cursor-pointer' />}

              </div>
            </div>
            <div className='flex flex-col my-8 w-3/4 mx-auto'>
              <button className='bg-[#D1A054B2] py-2 text-white'>Sing in</button>
              <h3 className='text-[#D1A054] my-4 text-center'>New here? <Link to={'/singup'}><span className='font-bold'>Create a New Account</span></Link></h3>

            </div>


          </form>

        </div>


      </div>
    </div>
  );
};

export default Login;