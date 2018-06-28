import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Ripple.css';

class Ripple extends React.Component {

    static defaultProps = {
        during: 1000,
        color: 'rgba(255, 255, 255, .3)',
        onClick: () => {}
    };

    constructor(props) {
        super(props);

        this.state = {
            rippleStyle: {
                position: 'absolute',
                borderRadius: '50%',
                opacity: 0,
                width: 35,
                height: 35,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                backgroundColor: props.color,
            },
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    handleClick = ev => {
        if (ev.stopPropagation) {
            ev.stopPropagation();
        }

        const { during } = this.props;
        const {
            pageX,
            pageY,
            currentTarget: { offsetLeft, offsetTop, offsetWidth, offsetHeight },
        } = ev;

        const left = pageX - offsetLeft;
        const top = pageY - offsetTop;
        const size = Math.max(offsetWidth, offsetHeight);

        this.setState({
            rippleStyle: {
                ...this.state.rippleStyle,
                top,
                left,
                opacity: 1,
                transform: 'translate(-50%, -50%)',
                transition: 'initial',
            },
        });

        this.timer = setTimeout(() => {
            this.setState({
                rippleStyle: {
                    ...this.state.rippleStyle,
                    opacity: 0,
                    transform: `scale(${size / 9})`,
                    transition: `all ${during}ms`,
                },
            })
        }, 10);
    };

    render() {

        const { children, style } = this.props;

        return (
            <div className={`ripple-wrap-container`} style={style} onClick={this.handleClick}>
                {children}
                <Transition timeout={0}>
                    <span style={this.state.rippleStyle}></span>
                </Transition>
            </div>
        )
    }
}

export default Ripple;
