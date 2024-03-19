import React, { useEffect, useState } from 'react';
import SharedTitele from '../SharedComponent/SharedTitle';
import MenuItem from '../SharedComponent/MenuItem';
import useMenu from '../../hooks/useMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {

    const [menu] = useMenu()

    const popular = menu?.filter(item => item.category === "popular")






    return (
        <div className='max-w-54xl mx-auto my-10'>

            <section>
                <SharedTitele heading={"from our menu"}
                    subHeading={"Popular Menu"} />
            </section>

            <section className='grid grid-cols-2'>
                {menu &&
                    popular.map((data, idx) => <MenuItem key={idx} item={data} />)
                }
            </section>
            <div className='flex justify-center mt-8'>


                <Link to={'/menu'}>
                    <button className='uppercase border-black border-b-2 rounded-lg text-2xl px-4 py-2  font-semibold  '>View Full  Menu</button>

                </Link>            </div>

        </div>
    );
};

export default PopularMenu;