import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const Cards = ({ coffee }) => {

    const { name, image, category, origin, type, id, rating, popularity } = coffee;

    return (
        <div className='flex relative'>
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
    coffee: PropTypes.object
}

export default Cards;