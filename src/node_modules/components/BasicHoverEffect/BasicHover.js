import React from 'react';

import './BasicHover.css';

class BasicHover extends React.Component {

    render() {
        return (
            <div className='basic-hover-effect-container'>
                {this.props.children}
            </div>
        )
    }
}

export default BasicHover;
