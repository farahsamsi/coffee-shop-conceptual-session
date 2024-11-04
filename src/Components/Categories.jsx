import { NavLink } from "react-router-dom";

import PropTypes from 'prop-types'


const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
            {
                categories?.map((category) => (
                    <NavLink
                        key={category.category}
                        to={`/categories/${category.category}`}
                        role="tab"
                        className={({ isActive }) => `tab ${isActive ? 'tab-active' : ''}`}>
                        {category.category}
                    </NavLink>
                ))
            }
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array
}

export default Categories;