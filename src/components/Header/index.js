import React from 'react';
import PropTypes from 'prop-types';

import './header.css';

const Header = ({image, title, author, difficulty}) => {

    return (
        <header className="header">
            <img src={image} alt={title}/>
            <h1 className="header-title">{title}</h1>
            <p className="header-subtitle" >{author} - {difficulty}</p>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
};

export default Header;