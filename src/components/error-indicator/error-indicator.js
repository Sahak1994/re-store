import React from 'react';

import icon from './Error-512.webp';

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator jumbotron">
            <img className="error-icon" src={icon} alt='error icon' />
            <div>Oops! Something went wrong. Please reload the page and try again.</div>
        </div>
    )
}

export default ErrorIndicator;