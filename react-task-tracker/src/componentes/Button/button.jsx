import React from 'react';
import PropTypes from 'prop-types';

function Button({color, text, onClick}) {
    return (
        <div>
            <button style={{backgroundColor: color}} 
                    className='btn'
                    onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button
