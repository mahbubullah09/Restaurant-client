import React from 'react';

const MenuItem = ({item}) => {

    const { name, image, price, recipe}= item
    return (
        <div>
            <div className='flex gap-[32px] mb-[24px]'>
                <img  className="w-[118px]  rounded-bl-full rounded-r-full" src={image} alt="" />

                <div>
                   <div className='flex justify-between text-xl uppercase font-normal'>
                   <h2>{name}</h2>
                   <h5 className='text-[#BB8506]'>${price}</h5>
                   </div>
                   <h6 className='w-[443px] text-[#737373] font-normal'> {recipe}</h6>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;