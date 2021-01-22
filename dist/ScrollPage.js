"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ScrollContext = require("./ScrollContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ScrollPage = function ScrollPage(_ref) {
  var children = _ref.children,
      page = _ref.page;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      margin: 0,
      padding: 0,
      height: "100vh",
      position: "relative"
    }
  }, /*#__PURE__*/_react["default"].createElement(_ScrollContext.ScrollPageContext.Provider, {
    value: {
      page: page
    }
  }, children));
};

var _default = ScrollPage;
exports["default"] = _default;