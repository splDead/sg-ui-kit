'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Transition = require('react-transition-group/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

require('./Ripple.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ripple = function (_React$Component) {
    _inherits(Ripple, _React$Component);

    function Ripple(props) {
        _classCallCheck(this, Ripple);

        var _this = _possibleConstructorReturn(this, (Ripple.__proto__ || Object.getPrototypeOf(Ripple)).call(this, props));

        _this.handleClick = function (ev) {
            if (ev.stopPropagation) {
                ev.stopPropagation();
            }

            var during = _this.props.during;
            var pageX = ev.pageX,
                pageY = ev.pageY,
                _ev$currentTarget = ev.currentTarget,
                offsetLeft = _ev$currentTarget.offsetLeft,
                offsetTop = _ev$currentTarget.offsetTop,
                offsetWidth = _ev$currentTarget.offsetWidth,
                offsetHeight = _ev$currentTarget.offsetHeight;


            var left = pageX - offsetLeft;
            var top = pageY - offsetTop;
            var size = Math.max(offsetWidth, offsetHeight);

            _this.setState({
                rippleStyle: _extends({}, _this.state.rippleStyle, {
                    top: top,
                    left: left,
                    opacity: 1,
                    transform: 'translate(-50%, -50%)',
                    transition: 'initial'
                })
            });

            _this.timer = setTimeout(function () {
                _this.setState({
                    rippleStyle: _extends({}, _this.state.rippleStyle, {
                        opacity: 0,
                        transform: 'scale(' + size / 9 + ')',
                        transition: 'all ' + during + 'ms'
                    })
                });
            }, 10);
        };

        _this.state = {
            rippleStyle: {
                position: 'absolute',
                borderRadius: '50%',
                opacity: 0,
                width: 35,
                height: 35,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                backgroundColor: props.color
            }
        };
        return _this;
    }

    _createClass(Ripple, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.timer);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                style = _props.style;


            return _react2.default.createElement(
                'div',
                { className: 'ripple-wrap-container', style: style, onClick: this.handleClick },
                children,
                _react2.default.createElement(
                    _Transition2.default,
                    { timeout: 0 },
                    _react2.default.createElement('span', { style: this.state.rippleStyle })
                )
            );
        }
    }]);

    return Ripple;
}(_react2.default.Component);

Ripple.defaultProps = {
    during: 1000,
    color: 'rgba(255, 255, 255, .3)',
    onClick: function onClick() {}
};
exports.default = Ripple;