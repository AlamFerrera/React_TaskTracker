import React from 'react';
import '../../index.css';
import PropTypes from 'prop-types';
import Button from '../Button/button';
import {useLocation} from 'react-router-dom'

function Header({title, onAdd, showAdd}) {
  const location = useLocation();
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' &&(
              <Button onClick={onAdd} 
              color={showAdd? 'red' : 'green'}
              text={showAdd? 'Close' : 'Add'}
              />
            )}
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
