"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FadeOut = exports.FadeIn = exports.Fade = void 0;

var _interpolation = require("../utils/interpolation");

var Fade = function Fade() {
  var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return {
    "in": {
      style: {
        opacity: function opacity(value) {
          return (0, _interpolation.SimpleInterpolation)(from, to, value);
        }
      }
    },
    out: {
      style: {
        opacity: function opacity(value) {
          return (0, _interpolation.SimpleInterpolation)(to, from, value);
        }
      }
    }
  };
};

exports.Fade = Fade;

var FadeIn = function FadeIn() {
  var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return {
    "in": {
      style: {
        opacity: function opacity(value) {
          return (0, _interpolation.SimpleInterpolation)(from, to, value);
        }
      }
    }
  };
};

exports.FadeIn = FadeIn;

var FadeOut = function FadeOut() {
  var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return {
    out: {
      style: {
        opacity: function opacity(value) {
          return (0, _interpolation.SimpleInterpolation)(from, to, value);
        }
      }
    }
  };
};

exports.FadeOut = FadeOut;