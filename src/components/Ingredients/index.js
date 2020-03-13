import React from 'react';
import PropTypes from 'prop-types';

import './ingredients.css';

const Ingredients = ({ list }) => {

    return (
        <div className="ingredients">
            <ul className="ingredients-list">
                {list.map((ingredient)=>{
                    return (
                        <li
                            key={ingredient.name}
                            className="ingredients-list-item"
                        >
                            <span className="quantity">{ingredient.quantity}</span> - {ingredient.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

Ingredients.propTypes = {
list: PropTypes.arrayOf(
    PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    }).isRequired,
).isRequired,
};
  

export default Ingredients;