import React from 'react';

import './PrimaryButton.css';

const PrimaryButton = ({ buttonText, onClick }) =>
    <button className={`primary-button`} onClick={onClick}>
        {buttonText}
    </button>;

export default PrimaryButton;
