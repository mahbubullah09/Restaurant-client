import React, { useEffect, useState } from 'react';
import SharedTitele from '../SharedComponent/SharedTitle';
import MenuItem from '../SharedComponent/MenuItem';
import useMenu from '../../hooks/useMenu';

const PopularMenu = () => {

    const [menu] = useMenu()

    const popular = menu?.filter(item => item.category === "popular")

    // const [menu, setMenu] = useState()

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === "popular")
    //             setMenu(popularItems)
    //         })
    // }, [])




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

        </div>
    );
};

export default PopularMenu;