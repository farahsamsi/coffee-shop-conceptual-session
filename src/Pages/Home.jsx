import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Utilities/Heading";
import Categories from "../Components/Categories";


const Home = () => {
    const categories = useLoaderData();

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
            <Categories categories={categories}></Categories>

            {/* Dynamic nested components */}
            <Outlet></Outlet>

        </div>
    );
};

export default Home;