"use strict";

var _reactDom = require("react-dom");

var ReactDOM = _interopRequireWildcard(_reactDom);

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _rootComponent = require("./rootComponent");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//Load react library
ReactDOM.render(React.createElement(_rootComponent.RootComponent, null), document.getElementById('root')); //ReactDOM utilities for DOM manipulation