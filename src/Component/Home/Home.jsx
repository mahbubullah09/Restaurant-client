import Banner from './Banner';
import FromMenu from './FromMenu';
import OnlineOrder from './OnlineOrder';
import PopularMenu from './PopularMenu';
import Reviews from './TESTIMONIALS/Reviews';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <OnlineOrder />
            <PopularMenu/>
            <FromMenu/>
            <Reviews/>

        </div>
    );
};

export default Home;