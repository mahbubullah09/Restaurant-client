import React, { useState } from 'react';
import SharedCover from '../SharedComponent/SharedCover';

import cover from "../../assets/shop/banner2.jpg"
import FoodCard from './FoodCard';
import useMenu from '../../hooks/useMenu';

const OurShop = () => {

    const [tabs, setTab] = useState(1)

    const handleTabs = id => {
        setTab(id)
    }
    const [menu] = useMenu()

    const drinks = menu?.filter(item => item.category === "drinks")
    const pizza = menu?.filter(item => item.category === "pizza")
    const dessert = menu?.filter(item => item.category === "dessert")
    const soup = menu?.filter(item => item.category === "soup")
    const salad = menu?.filter(item => item.category === "salad")

    return (
        <div>

            <SharedCover bimg={cover}
                title={'OUR SHOP'}
                subTitle={'Would you like to try a dish?'} />

            <section className='max-w-5xl mx-auto '>
                <ul className='flex gap-2 justify-center cursor-pointer my-6 font-semibold uppercase text-2xl '>
                    <li className={tabs === 1 ? "text-[#BB8506]  border-[#BB8506]    border-b-[3px] " : " "} onClick={() => handleTabs(1)}>Salad</li>
                    <li className={tabs === 2 ? "text-[#BB8506]  border-[#BB8506]    border-b-[3px]" : " "} onClick={() => handleTabs(2)}>pizza</li>
                    <li className={tabs === 3 ? "text-[#BB8506]  border-[#BB8506]    border-b-[3px]" : " "} onClick={() => handleTabs(3)}>soups</li>
                    <li className={tabs === 4 ? "text-[#BB8506]  border-[#BB8506]    border-b-[3px]" : " "} onClick={() => handleTabs(4)}>desserts</li>
                    <li className={tabs === 5 ? "text-[#BB8506]  border-[#BB8506]    border-b-[3px]" : " "} onClick={() => handleTabs(5)}>drinks</li>
                </ul>
            </section>

            {/* tab info section  */}
            <section className='my-16 max-w-6xl mx-auto'>
                <div className={tabs ===1 ? "block" : "hidden"}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        salad?.map((data,idx) => 
                            <FoodCard key={idx} data={data} />
                        )
                    }
                </div>
                </div>
                <div className={tabs ===2 ? "block" : "hidden"}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        pizza?.map((data,idx) => 
                            <FoodCard key={idx} data={data} />
                        )
                    }
                </div>
                </div>
                <div className={tabs ===3 ? "block" : "hidden"}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        soup?.map((data,idx) => 
                            <FoodCard key={idx} data={data} />
                        )
                    }
                </div>
                </div>
                <div className={tabs ===4 ? "block" : "hidden"}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        dessert?.map((data,idx) => 
                            <FoodCard key={idx} data={data} />
                        )
                    }
                </div>
                </div>
                <div className={tabs ===5 ? "block" : "hidden"}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        drinks?.map((data,idx) => 
                            <FoodCard key={idx} data={data} />
                        )
                    }
                </div>
                </div>
            </section>

        </div>
    );
};

export default OurShop;