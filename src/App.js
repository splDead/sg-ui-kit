import React, {Component} from 'react';

import './App.css';

import BasicHover from 'components/BasicHoverEffect';
import Ripple from 'components/Ripple';
import PrimaryButton from 'components/PrimaryButton';
import TextButton from 'components/TextButton';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <h2>
                    Primary button
                </h2>
                <BasicHover>
                    <Ripple>
                        <PrimaryButton buttonText='Primary button' />
                    </Ripple>
                </BasicHover>
                <h2>
                    Text button
                </h2>
                <BasicHover>
                    <Ripple color='rgba(0, 0, 0, .3)'>
                        <TextButton buttonText='Text button' />
                    </Ripple>
                </BasicHover>
            </div>
        );
    }
}

export default App;
