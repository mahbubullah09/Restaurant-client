import React from 'react';
import SharedCover from '../SharedComponent/SharedCover';
import menuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from '../Home/PopularMenu';

const Menu = () => {
    return (
        <div>

            <SharedCover bimg={menuImg}
            title={'OUR MENU'}
            subTitle={'Would you like to try a dish?'}/>
            <PopularMenu/>
            <SharedCover bimg={menuImg}
            title={'OUR MENU'}
            subTitle={'Would you like to try a dish?'}/>
            <PopularMenu/>
            
        </div>
    );
};

export default Menu;