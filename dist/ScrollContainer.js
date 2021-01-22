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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ScrollAnimatorContainer = function ScrollAnimatorContainer(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)({
    currentY: 0,
    // 현재 스크롤 위치(px) 
    viewportHeight: 0,
    // 화면 높이(px) 
    totalPage: 0,
    // 총 페이지 수
    totalHeight: 0,
    // 총 페이지 높이 합 (px)
    totalProgress: 0,
    // 총 페이지 진행률 (%)
    realPage: 0,
    // 실수 페이지
    currentPage: 0,
    // 정수 페이지
    currentProgress: 0 // 현재 페이지 진행률 (%)

  }),
      _useState2 = _slicedToArray(_useState, 2),
      scrollData = _useState2[0],
      setScrollData = _useState2[1];

  var scrollEvent = (0, _react.useCallback)(function () {
    var currentY = window.pageYOffset;
    var viewportHeight = window.innerHeight;
    var totalPage = children.length;
    var totalHeight = totalPage * (viewportHeight - 1);
    var totalProgress = currentY / totalHeight; // 전체 페이지 진행률 0 ~ 1

    var realPage = currentY / viewportHeight; // 실수 페이지

    var currentPage = parseInt(realPage); // 정수 페이지

    var currentProgress = realPage - currentPage; // 현재 페이지 진행률

    setScrollData({
      currentY: currentY,
      viewportHeight: viewportHeight,
      totalPage: totalPage,
      totalHeight: totalHeight,
      totalProgress: totalProgress,
      realPage: realPage,
      currentPage: currentPage,
      currentProgress: currentProgress
    });
  });
  (0, _react.useEffect)(function () {
    scrollEvent();
    window.addEventListener("scroll", scrollEvent);
    return function () {
      return window.removeEventListener("scroll", scrollEvent);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_ScrollContext.ScrollContainerContext.Provider, {
    value: scrollData
  }, children));
};

var _default = ScrollAnimatorContainer;
exports["default"] = _default;