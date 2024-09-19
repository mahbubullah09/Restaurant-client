import { Link, useNavigate } from 'react-router-dom';
import bg from '../../assets/others/authentication.png'
import img from '../../assets/others/authentication2.png'


import { useContext, useState } from 'react';
import { AuthContex } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from './SocialLogin';

const Registration = () => {
  const axiosPublic = useAxiosPublic()
  const {createUser, updateUserProfile} = useContext(AuthContex)
  const navigate = useNavigate();
  const [click, setClick] = useState(false)
    const handleRegistration = e =>{
        e.preventDefault();

        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        

        console.log(displayName, email,password);

        createUser(email, password)
        .then(result => {
          result.user
        console.log(result.user)
        updateUserProfile(displayName)
        .then(()=>{

          const userInfo = {
            name: displayName,
            email: email
          }
          axiosPublic.post('/users', userInfo)
          .then(res=>{
            console.log("res");
          
          if(res.data.insertedId){
            toast.success("Singup successfully")
            navigate('/')
          }
          })

         

          
        })
        .catch(err =>console.log(err))
      
      })
    }
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='min-h-[100vh] py-12 lg:py-28'>

        <div 
            className='flex flex-col  md:flex-row-reverse items-center justify-center gap-4  max-w-[1650px]  mx-auto py-12  p-4 px-2 lg:px-20'>

            <div>
                <img className='w-full hidden lg:block' src={img} alt="" />
            </div>

            <div style={{ backgroundImage: `url(${bg})` }} 
            className='w-full  shadow-2xl md:w-1/2 p-2 lg:p-10 '>
                <h2 className='text-center text-4xl font-bold'>Sign Up</h2>
                <form onSubmit={handleRegistration}>
                  <div className='flex flex-col my-8 w-3/4 mx-auto'>
                    <label className='text-xl font-semibold my-2'>Name</label>
                    <input placeholder='Enter your Name' type="text" name="name" className='p-2  ' id="" />
                  </div>
                  
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
                     <h3 className='text-[#D1A054] my-4 text-center'>Already registered?  <Link to={'/singup'}><span className='font-bold'>Go to log in</span></Link></h3>

                  </div>
                 

                </form>

                <SocialLogin/>
            </div>
            

        </div>
    </div>
    );
};

export default Registration;