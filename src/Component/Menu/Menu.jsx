import React from 'react';
import SharedCover from '../SharedComponent/SharedCover';
import menuImg from '../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>

            <SharedCover bimg={menuImg}
            title={'OUR MENU'}
            subTitle={'Would you like to try a dish?'}/>
            
        </div>
    );
};

export default Menu;