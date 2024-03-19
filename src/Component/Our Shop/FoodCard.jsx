import React from 'react';

const FoodCard = ({ data }) => {
    return (
        <div className='bg-[#F3F3F3] max-w-[370px]'>

            <img src={data?.image} alt="" />
            <div className='text-center p-6'>
                <h2 className=' text-2xl font-semibold '>{data?.name}</h2>
                <p className=' text-left text-[#737373] my-2'>{data?.recipe}</p>
                <button className=' uppercase py-2 px-4 bg-black text-[#BB8506] text-lg font-medium rounded-lg border-[#BB8506] border-b-4 hover:bg-[#E8E8E8]'>add to card</button>
            </div>


        </div>
    );
};

export default FoodCard;