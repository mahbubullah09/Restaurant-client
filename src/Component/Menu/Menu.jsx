import React from 'react';
import SharedCover from '../SharedComponent/SharedCover';
import menuImg from '../../assets/menu/banner3.jpg'
import useMenu from '../../hooks/useMenu';


const Menu = () => {

    const [menu] = useMenu()

    const offered = menu?.filter(item => item.category === "offered")
    const pizza = menu?.filter(item => item.category === "pizza")
    const dessert = menu?.filter(item => item.category === "dessert")
    const soup = menu?.filter(item => item.category === "soup")
    const salad = menu?.filter(item => item.category === "salad")

   

    return (
        <div>

            <SharedCover bimg={menuImg}
            title={'OUR MENU'}
            subTitle={'Would you like to try a dish?'}/>
            
            
        </div>
    );
};

export default Menu;