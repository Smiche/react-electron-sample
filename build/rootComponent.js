'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RootComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJsonEditorViewer = require('react-json-editor-viewer');

var _loadFileComponent = require('./loadFileComponent');

var _saveFileComponent = require('./saveFileComponent');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RootComponent = exports.RootComponent = function (_React$Component) {
  _inherits(RootComponent, _React$Component);

  function RootComponent(props) {
    _classCallCheck(this, RootComponent);

    //This component has state. The default state is defined:
    var _this = _possibleConstructorReturn(this, (RootComponent.__proto__ || Object.getPrototypeOf(RootComponent)).call(this, props));

    _this.state = {
      //String of the contents of the file loaded
      contentLoaded: '',
      //Object holding the changed data
      contentChanged: '',
      //Path of the opened file
      filePath: ''
    };

    //binding the functions to the same "this" context
    _this.onFileContentLoaded = _this.onFileContentLoaded.bind(_this);
    _this.onJsonChange = _this.onJsonChange.bind(_this);
    return _this;
  }
  //Called by LoadFileComponent when a file is loaded, the state will be updated with the data it receives.


  _createClass(RootComponent, [{
    key: 'onFileContentLoaded',
    value: function onFileContentLoaded(content, path) {
      this.setState({
        contentLoaded: JSON.parse(content),
        filePath: path
      });
    }
    //Called whenever the json is changed in the editor, state object representing it will change too.

  }, {
    key: 'onJsonChange',
    value: function onJsonChange(key, value, parent, data) {
      this.setState({
        contentChanged: data
      });
    }
    //Renders the RootComponent

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(_loadFileComponent.LoadFileComponent, { onFileContentLoaded: this.onFileContentLoaded }),
        this.state.contentChanged !== "" && React.createElement(_saveFileComponent.SaveFileComponent, { dataToSave: this.state.contentChanged, fileToSave: this.state.filePath }),
        this.state.contentLoaded !== "" && React.createElement(_reactJsonEditorViewer.JSONEditor, { data: this.state.contentLoaded, view: 'dual', onChange: this.onJsonChange })
      );
    }
  }]);

  return RootComponent;
}(React.Component);