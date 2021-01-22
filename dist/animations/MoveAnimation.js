"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveOut = exports.MoveIn = exports.Move = void 0;

var _interpolation = require("../utils/interpolation");

var Move = function Move() {
  var dx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var dy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var outDx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var outDy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -100;
  return {
    "in": {
      style: {
        transform: function transform(value) {
          return "translate(".concat((0, _interpolation.SimpleInterpolation)(dx, 0, value), "px, ").concat((0, _interpolation.SimpleInterpolation)(dy, 0, value), "px)");
        }
      }
    },
    out: {
      style: {
        transform: function transform(value) {
          return "translate(".concat((0, _interpolation.SimpleInterpolation)(0, outDx || dx, value), "px, ").concat((0, _interpolation.SimpleInterpolation)(0, outDy || dy, value), "px)");
        }
      }
    }
  };
};

exports.Move = Move;

var MoveIn = function MoveIn() {
  var dx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var dy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return {
    "in": {
      style: {
        transform: function transform(value) {
          return "translate(".concat((0, _interpolation.SimpleInterpolation)(dx, 0, value), "px, ").concat((0, _interpolation.SimpleInterpolation)(dy, 0, value), "px)");
        }
      }
    }
  };
};

exports.MoveIn = MoveIn;

var MoveOut = function MoveOut() {
  var dx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var dy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -100;
  return {
    out: {
      style: {
        transform: function transform(value) {
          return "translate(".concat((0, _interpolation.SimpleInterpolation)(0, dx, value), "px, ").concat((0, _interpolation.SimpleInterpolation)(0, dy, value), "px)");
        }
      }
    }
  };
};

exports.MoveOut = MoveOut;