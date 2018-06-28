'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./TextButton.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextButton = function TextButton(_ref) {
    var buttonText = _ref.buttonText,
        style = _ref.style,
        onClick = _ref.onClick;
    return _react2.default.createElement(
        'button',
        { className: 'text-button', onClick: onClick, style: style },
        buttonText,
        _react2.default.createElement('span', { className: 'dashed-border' })
    );
};

exports.default = TextButton;