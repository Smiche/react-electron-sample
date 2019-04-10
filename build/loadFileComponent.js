'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadFileComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _electron = require('electron');

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//This class is exported so it can be used in other files
var LoadFileComponent = exports.LoadFileComponent = function (_React$Component) {
  _inherits(LoadFileComponent, _React$Component);

  //the constructor is called when the component is initialized
  function LoadFileComponent(props) {
    _classCallCheck(this, LoadFileComponent);

    //openDialog function bound to same "this" context
    var _this = _possibleConstructorReturn(this, (LoadFileComponent.__proto__ || Object.getPrototypeOf(LoadFileComponent)).call(this, props));

    _this.openDialog = _this.openDialog.bind(_this);
    return _this;
  }
  //Function that opens a dialog to load a file


  _createClass(LoadFileComponent, [{
    key: 'openDialog',
    value: function openDialog() {
      var _this2 = this;

      //remote.dialog api used for the dialog
      _electron.remote.dialog.showOpenDialog({
        //type of the dialog
        properties: ['openFile'],
        //filters for allowed file extensions
        filters: [{
          name: 'json',
          extensions: ['json']
        }]
      },
      //callback when the file/s are selected
      function (files) {
        if (files !== undefined) {
          //files array has only 1 element with single file selection, index 0
          //File contents are loaded with fs
          fs.readFile(files[0], 'utf-8', function (err, data) {
            if (!err) {
              if (_this2.props.onFileContentLoaded) {
                /*
                 * If there are no errors and a callback is provided from parent component,
                 * the callback will be called with the contents and path of the file.
                 */
                _this2.props.onFileContentLoaded(data, files[0]);
              }
            }
          });
        }
      });
    }
    //Render method returns html to renderer to the UI

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Load a JSON file'
        ),
        React.createElement(
          'button',
          { onClick: this.openDialog },
          'Open File'
        )
      );
    }
  }]);

  return LoadFileComponent;
}(React.Component);