import React from 'react';
import { Link } from 'react-router-dom';

const Thankyou = () => {
    return (
        <div id="error-page" className=" text-center h-full mt-44 ">
       <div className='w-full md:w-1/3 mx-auto bg-zinc-200 rounded-2xl p-4 my-2 mb-4'>
       <h4 className=" text-6xl font-bold">Thank you</h4>
       <p className=" text-2xl font-bold">fo submitting feedback!!</p>
       </div>
        <Link to={'/dashboard/userhome'}><button  className="rounded py-1 px-4 bg-black text-white">Go To Home</button></Link>
        
           </div>
    );
};

export default Thankyou;