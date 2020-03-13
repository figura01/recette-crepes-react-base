import React from 'react';
import PropTypes from 'prop-types';

import './etapes.css';

const Etapes = ({ steps }) => {
    return (
        <div className="etapes">
            <ul className="etapes-list">
                {steps.map((step, index) => {
                    return (
                        <li
                            key={index}
                            className="etapes-list-item"
                        >
                            {step}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
Etapes.propTypes = {
    steps: PropTypes.arrayOf(
        PropTypes.string.isRequired,
    ).isRequired,
};

export default Etapes;