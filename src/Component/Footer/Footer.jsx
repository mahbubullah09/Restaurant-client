import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className='flex text-white'>
                <div className=' bg-[#1F2937] flex flex-col w-full text-center  p-16'>
                    <h2 className=' text-3xl'>CONTACT US</h2>
                    <p className='text-center text-xl mt-6'>123 ABS Street, Uni 21, Bangladesh <br />
                        +88 123456789 <br />
                        Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00</p>

                </div>

                <div className=' bg-[#111827]  flex flex-col w-full p-16 items-center  text-center'>
                    <h2 className='text-3xl'>Follow US</h2>
                    <h3 className=' text-xl my-4'>Join us on social media</h3>
                    <h3 className='flex gap-3 text-2xl '><FaFacebookF /> <FaInstagram/> <FaTwitter/></h3>

                </div>
            </div>

            <div className=' bg-black text-white py-4'>
                <h4 className='text-center text-xl '>Copyright © CulinaryCloud. All rights reserved.</h4>
            </div>

        </div>
    );
};

export default Footer;