import Banner from './Banner';
import FromMenu from './FromMenu';
import OnlineOrder from './OnlineOrder';
import PopularMenu from './PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OnlineOrder />
            <PopularMenu/>
            <FromMenu/>

        </div>
    );
};

export default Home;