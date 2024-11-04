import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Utilities/Heading";
import Categories from "../Components/Categories";

import { HelmetProvider, Helmet } from 'react-helmet-async';



const Home = () => {
    const categories = useLoaderData();

    return (
        <HelmetProvider>
            <Helmet>
                <title>Home | Coffee_Shop</title>
            </Helmet>

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

        </HelmetProvider>
    );
};

export default Home;