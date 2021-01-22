"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomOut = exports.ZoomIn = exports.Zoom = void 0;

var _interpolation = require("../utils/interpolation");

var Zoom = function Zoom() {
  var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return {
    "in": {
      style: {
        transform: function transform(value) {
          return "scale(".concat((0, _interpolation.SimpleInterpolation)(from, to, value), ")");
        }
      }
    },
    out: {
      style: {
        transform: function transform(value) {
          return "scale(".concat((0, _interpolation.SimpleInterpolation)(to, from, value), ")");
        }
      }
    }
  };
};

exports.Zoom = Zoom;

var ZoomIn = function ZoomIn() {
  var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return {
    "in": {
      style: {
        transform: function transform(value) {
          return "scale(".concat((0, _interpolation.SimpleInterpolation)(from, to, value), ")");
        }
      }
    }
  };
};

exports.ZoomIn = ZoomIn;

var ZoomOut = function ZoomOut() {
  var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return {
    out: {
      style: {
        transform: function transform(value) {
          return "scale(".concat((0, _interpolation.SimpleInterpolation)(from, to, value), ")");
        }
      }
    }
  };
};

exports.ZoomOut = ZoomOut;