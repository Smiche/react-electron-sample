"use strict";

var _reactDom = require("react-dom");

var ReactDOM = _interopRequireWildcard(_reactDom);

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//Render Hello World in div with react
//ReactDOM utilities for DOM manipulation
ReactDOM.render(React.createElement(
    "h1",
    null,
    "Hello, world!"
), document.getElementById('root'));
//Load react library