"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.batch = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var callIfFunc = function callIfFunc(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return typeof value === "function" ? value.apply(void 0, params) : value;
};

var batch = function batch() {
  var batched = {
    "in": {
      style: {}
    },
    out: {
      style: {}
    }
  };
  var batchedTransform = {
    "in": [],
    out: []
  };

  for (var _len2 = arguments.length, animations = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    animations[_key2] = arguments[_key2];
  }

  for (var _i = 0, _animations = animations; _i < _animations.length; _i++) {
    var _animation$in, _animation$out, _animation$in2, _animation$in2$style, _animation$out2, _animation$out2$style;

    var animation = _animations[_i];
    batched["in"].style = _objectSpread(_objectSpread({}, batched["in"].style), animation === null || animation === void 0 ? void 0 : (_animation$in = animation["in"]) === null || _animation$in === void 0 ? void 0 : _animation$in.style);
    batched.out.style = _objectSpread(_objectSpread({}, batched.out.style), animation === null || animation === void 0 ? void 0 : (_animation$out = animation.out) === null || _animation$out === void 0 ? void 0 : _animation$out.style);
    if (animation !== null && animation !== void 0 && (_animation$in2 = animation["in"]) !== null && _animation$in2 !== void 0 && (_animation$in2$style = _animation$in2.style) !== null && _animation$in2$style !== void 0 && _animation$in2$style.transform) batchedTransform["in"].push(animation["in"].style.transform);
    if (animation !== null && animation !== void 0 && (_animation$out2 = animation.out) !== null && _animation$out2 !== void 0 && (_animation$out2$style = _animation$out2.style) !== null && _animation$out2$style !== void 0 && _animation$out2$style.transform) batchedTransform.out.push(animation.out.style.transform);
  }

  if (batchedTransform["in"].length > 0) batched["in"].style.transform = function (value) {
    return batchedTransform["in"].map(function (t) {
      return callIfFunc(t, value);
    }).join(" ");
  };
  if (batchedTransform.out.length > 0) batched.out.style.transform = function (value) {
    return batchedTransform.out.map(function (t) {
      return callIfFunc(t, value);
    }).join(" ");
  };
  return batched;
};

exports.batch = batch;