import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom';
import { FaTrash } from "react-icons/fa6";


const Cards = ({ coffee, handleRemove }) => {
    const { pathname } = useLocation();

    const { name, image, category, origin, type, id, rating, popularity } = coffee;

    return (
        <div className='flex relative'>
            {
                pathname === '/dashboard' && <div onClick={() => handleRemove(id)} className='absolute -top-5 -right-5 p-3 rounded-full bg-warning z-50'><FaTrash /></div>
            }
            <Link
                to={`/coffees/${id}`}
                className='transition lg:hover:scale-105 shadow-xl rounded-xl overflow-hidden'
            >
                <figure className='w-full h-48 overflow-hidden'>
                    <img className='w-full object-contain' src={image} alt='' />
                </figure>
                <div className='p-4'>
                    <h1 className='text-xl'>Name: {name}</h1>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Origin: {origin}</p>
                    <p>Rating: {rating}</p>
                    <p>Popular: {popularity}</p>
                </div>

            </Link>
        </div>
    );
};

Cards.propTypes = {
    coffee: PropTypes.object,
    handleRemove: PropTypes.func
}

export default Cards;