'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./PrimaryButton.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryButton = function PrimaryButton(_ref) {
    var buttonText = _ref.buttonText,
        onClick = _ref.onClick;
    return _react2.default.createElement(
        'button',
        { className: 'primary-button', onClick: onClick },
        buttonText
    );
};

exports.default = PrimaryButton;