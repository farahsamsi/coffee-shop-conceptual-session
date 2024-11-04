import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Cards from "./Cards";
import { useEffect, useState } from "react";


const CoffeeCards = () => {

    // navigation to all view all cards
    const navigate = useNavigate();

    // getting data from fetcher loader
    const data = useLoaderData();

    // getting dynamic route name
    const { category } = useParams(); // params is used to get the dynamic content of the URL

    // setting dynamic category coffee
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        if (category) {
            const filterByCategory = [...data].filter(
                coffee => coffee.category === category
            );
            setCoffees(filterByCategory);
        } else {
            setCoffees(data.slice(0, 6)); //using sllice to display only the first 6 cards
        }
    }, [category, data]);



    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
                {
                    coffees.map(coffee =>
                        <Cards
                            key={coffee.id}
                            coffee={coffee}
                        >
                        </Cards>)
                }
            </div>
            <button onClick={() => navigate('/coffees')} className="btn btn-warning mt-6">View All</button>
        </div>
    );
};

export default CoffeeCards;