import Banner from "../Components/Banner";
import Heading from "../Utilities/Heading";


const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>

            {/* Heading */}
            <Heading
                title={'Browse Coffees by Category'}
                subtitle={'Choose your desired coffee category to browse through specific coffee that fit in your taste.'}
            ></Heading>

            {/* Categories tab section */}
            {/* Dynamic nested components */}
        </div>
    );
};

export default Home;