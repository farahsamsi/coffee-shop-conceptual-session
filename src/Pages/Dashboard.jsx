import { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import Heading from "../Utilities/Heading";
import { getAllFavorites, removeFavorite } from "../Components/Utilities";
import { Helmet, HelmetProvider } from "react-helmet-async";



const Dashboard = () => {


    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        const favorites = getAllFavorites();
        setCoffees(favorites);
    }, [])

    const handleRemove = (id) => {
        removeFavorite(id);
        const favorites = getAllFavorites();
        setCoffees(favorites);
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Dashboard | Coffee_Shop</title>
            </Helmet>
            <Heading
                title='Welcome to Dashboard'
                subtitle='Manage coffees that you have previously added as favorite. You can view or remove them from here.'
            />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
                {coffees.map(coffee => (
                    <Cards handleRemove={handleRemove} key={coffee.id} coffee={coffee} />
                ))}
            </div>
        </HelmetProvider>
    );
};

export default Dashboard;