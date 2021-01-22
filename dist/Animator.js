"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ScrollContext = require("./ScrollContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Animator = function Animator(_ref) {
  var _animation$out, _animation$in;

  var children = _ref.children,
      _ref$animation = _ref.animation,
      animation = _ref$animation === void 0 ? {} : _ref$animation;

  var _useContext = (0, _react.useContext)(_ScrollContext.ScrollContainerContext),
      currentPage = _useContext.currentPage,
      currentProgress = _useContext.currentProgress;

  var _useContext2 = (0, _react.useContext)(_ScrollContext.ScrollPageContext),
      page = _useContext2.page;

  var filterStyle = function filterStyle() {
    var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var filteredStyle = _objectSpread({}, style);

    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    for (var key in filteredStyle) {
      if (typeof filteredStyle[key] === "function") filteredStyle[key] = filteredStyle[key].apply(filteredStyle, params);
    }

    return filteredStyle;
  };

  var calculatedStyle = currentPage === page ? // for current (out)
  _objectSpread({}, filterStyle(animation === null || animation === void 0 ? void 0 : (_animation$out = animation.out) === null || _animation$out === void 0 ? void 0 : _animation$out.style, currentProgress)) : currentPage === page - 1 ? // for next (in)
  _objectSpread({}, filterStyle(animation === null || animation === void 0 ? void 0 : (_animation$in = animation["in"]) === null || _animation$in === void 0 ? void 0 : _animation$in.style, currentProgress)) : {
    display: "none"
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: calculatedStyle
  }, children);
};

var _default = Animator;
exports["default"] = _default;