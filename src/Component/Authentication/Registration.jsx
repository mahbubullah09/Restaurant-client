import { Link } from 'react-router-dom';
import bg from '../../assets/others/authentication.png'
import img from '../../assets/others/authentication2.png'
import AuthProvider, { AuthContex } from '../../provider/AuthProvider';
import { Result } from 'postcss';

const Registration = () => {
  const {createUser} = AuthContex(AuthProvider)

    const handleRegistration = e =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email,password);

        createUser(email, password)
        .then(result => result.user)
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
                    <input placeholder='Enter your Password' type="text" name="password" className='p-2  ' id="" />
                  </div>
                  <div className='flex flex-col my-8 w-3/4 mx-auto'>
                     <button className='bg-[#D1A054B2] py-2 text-white'>Sing in</button>
                     <h3 className='text-[#D1A054] my-4 text-center'>Already registered?  <Link to={'/singup'}><span className='font-bold'>Go to log in</span></Link></h3>

                  </div>
                 

                </form>
            </div>
            

        </div>
    </div>
    );
};

export default Registration;