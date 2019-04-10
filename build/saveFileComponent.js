'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaveFileComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//exporting the component for other files to use
var SaveFileComponent = exports.SaveFileComponent = function (_React$Component) {
  _inherits(SaveFileComponent, _React$Component);

  //constructor called when object is instantiated
  function SaveFileComponent(props) {
    _classCallCheck(this, SaveFileComponent);

    //binding saveFile func to the same "this" context
    var _this = _possibleConstructorReturn(this, (SaveFileComponent.__proto__ || Object.getPrototypeOf(SaveFileComponent)).call(this, props));

    _this.saveFile = _this.saveFile.bind(_this);
    return _this;
  }
  //function to save a contents to a file


  _createClass(SaveFileComponent, [{
    key: 'saveFile',
    value: function saveFile() {
      if (this.props.dataToSave && this.props.fileToSave) {
        fs.writeFile(this.props.fileToSave,
        //JavaScript object will be turned into a string and prettified
        JSON.stringify(this.props.dataToSave, null, 2), function (err) {
          if (err) {
            //if an error comes up a message will be displayed
            window.alert(err.message);
          }
        });
      }
    }
    //renders this component

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        { onClick: this.saveFile },
        'Save'
      );
    }
  }]);

  return SaveFileComponent;
}(React.Component);