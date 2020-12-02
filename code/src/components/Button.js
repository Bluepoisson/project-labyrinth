import React from 'react';

const Button = props => {
    const { text, onButtonClick } = props;

    return (
        <button
            onClick={onButtonClick}
        >
            {text}
        </button>
    )
};

export default Button;