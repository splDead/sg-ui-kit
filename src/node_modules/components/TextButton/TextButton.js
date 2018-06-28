import React from 'react';

import './TextButton.css';

const TextButton = ({ buttonText, style, onClick }) =>
    <button className={`text-button`} onClick={onClick} style={style}>
        {buttonText}
        <span className='dashed-border'></span>
    </button>;

export default TextButton;
