import React from 'react';
import SharedCover from '../SharedComponent/SharedCover';
import menuImg from '../../assets/menu/banner3.jpg'
import useMenu from '../../hooks/useMenu';
import SharedTitele from '../SharedComponent/SharedTitle';
import MenuItem from '../SharedComponent/MenuItem';
import othersMenuImg from '../../assets/home/chef-service.jpg'
import SharedItemCover from '../SharedComponent/sharedItemCover';
import { Link } from 'react-router-dom';


const Menu = () => {

    const [menu] = useMenu()

    const offered = menu?.filter(item => item.category === "offered")
    const pizza = menu?.filter(item => item.category === "pizza")
    const dessert = menu?.filter(item => item.category === "dessert")
    const soup = menu?.filter(item => item.category === "soup")
    const salad = menu?.filter(item => item.category === "salad")



    return (
        <div>
            <div>

                <SharedCover bimg={menuImg}
                    title={'OUR MENU'}
                    subTitle={'Would you like to try a dish?'} />
                <section>
                    <SharedTitele heading={"Don't miss"}
                        subHeading={"TODAY'S OFFER"} />
                </section>

                <section className='grid grid-cols-1  lg:grid-cols-2 max-w-7xl mx-auto px-2 place-items-center'>
                    {menu &&
                        offered.map((data, idx) => <MenuItem key={idx} item={data} />)
                    }
                </section>
                <div className='flex justify-center '>

                    <Link to={'/ourshop'}>
                        <button className='uppercase py-2 px-4 bg-black text-[#BB8506] text-lg font-medium rounded-lg border-[#BB8506] border-b-4 hover:bg-[#E8E8E8] text-center  '>ORDER YOUR FAVOURITE FOOD</button>

                    </Link>
                </div>

            </div>
            <div className='my-10'>

                <SharedItemCover bimg={othersMenuImg}
                    title={'DESSERTS'}
                    subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

                <section className='grid grid-cols-1  lg:grid-cols-2 max-w-7xl mx-auto px-2 place-items-center'>
                    {menu &&
                        dessert.map((data, idx) => <MenuItem key={idx} item={data} />)
                    }
                </section>
                <div className='flex justify-center '>

                    <Link to={'/ourshop'}>
                        <button className='uppercase py-2 px-4 bg-black text-[#BB8506] text-lg font-medium rounded-lg border-[#BB8506] border-b-4 hover:bg-[#E8E8E8] text-center  '>ORDER YOUR FAVOURITE FOOD</button>

                    </Link>
                </div>
            </div>
            <div className='my-10'>

                <SharedItemCover bimg={othersMenuImg}
                    title={'PIZZA'}
                    subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

                <section className='grid grid-cols-1  lg:grid-cols-2 max-w-7xl mx-auto px-2 place-items-center'>
                    {menu &&
                        pizza.map((data, idx) => <MenuItem key={idx} item={data} />)
                    }
                </section>
                <div className='flex justify-center '>

                    <Link to={'/ourshop'}>
                        <button className='uppercase py-2 px-4 bg-black text-[#BB8506] text-lg font-medium rounded-lg border-[#BB8506] border-b-4 hover:bg-[#E8E8E8] text-center  '>ORDER YOUR FAVOURITE FOOD</button>

                    </Link>
                </div>
            </div>

            <div className='my-10'>

                <SharedItemCover bimg={othersMenuImg}
                    title={'SALADS'}
                    subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

                <section className='grid grid-cols-1  lg:grid-cols-2 max-w-7xl mx-auto px-2 place-items-center'>
                    {menu &&
                        salad.map((data, idx) => <MenuItem key={idx} item={data} />)
                    }
                </section>
                <div className='flex justify-center '>

                    <Link to={'/ourshop'}>
                        <button className='uppercase py-2 px-4 bg-black text-[#BB8506] text-lg font-medium rounded-lg border-[#BB8506] border-b-4 hover:bg-[#E8E8E8] text-center  '>ORDER YOUR FAVOURITE FOOD</button>

                    </Link>
                </div>
            </div>

            <div className='my-10'>

                <SharedItemCover bimg={othersMenuImg}
                    title={'SOUPS'}
                    subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

                <section className='grid grid-cols-1  lg:grid-cols-2 max-w-7xl mx-auto px-2 place-items-center'>
                    {menu &&
                        soup.map((data, idx) => <MenuItem key={idx} item={data} />)
                    }
                </section>
                <div className='flex justify-center '>

                    <Link to={'/ourshop'}>
                        <button className='uppercase py-2 px-4 bg-black text-[#BB8506] text-lg font-medium rounded-lg border-[#BB8506] border-b-4 hover:bg-[#E8E8E8] text-center '>ORDER YOUR FAVOURITE FOOD</button>

                    </Link>
                </div>
            </div>



        </div>
    );
};

export default Menu;