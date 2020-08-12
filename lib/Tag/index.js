"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tag(props) {
  var text = props.text;
  return /*#__PURE__*/_react.default.createElement("p", null, "\u8FD9\u662F\u4E00\u4E2A\u6807\u7B7E", text);
}

Tag.propTypes = {
  text: _propTypes.default.any
};
var _default = Tag;
exports.default = _default;