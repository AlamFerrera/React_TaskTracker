import React from 'react';
import '../../index.css';
import PropTypes from 'prop-types';
import Button from '../Button/button';

function Header({title}) {

    const onClick = ()=> {
        console.log("ha sido clickeado");
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' 
                    text='Hello' 
                    onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
  }
  
Header.propTypes = {
    title: PropTypes.string.isRequired,
  }

export default Header
