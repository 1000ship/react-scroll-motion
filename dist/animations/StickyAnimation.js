"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickyOut = exports.StickyIn = exports.Sticky = void 0;

var Sticky = function Sticky() {
  var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  return {
    "in": {
      style: {
        left: "".concat(left, "%"),
        top: "".concat(top, "%"),
        transform: "translate(-50%, -50%)",
        position: "fixed"
      }
    },
    out: {
      style: {
        left: "".concat(left, "%"),
        top: "".concat(top, "%"),
        transform: "translate(-50%, -50%)",
        position: "fixed"
      }
    }
  };
};

exports.Sticky = Sticky;

var StickyIn = function StickyIn() {
  var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  return {
    "in": {
      style: {
        left: "".concat(left, "%"),
        top: "".concat(top, "%"),
        transform: "translate(-50%, -50%)",
        position: "fixed"
      }
    },
    out: {
      style: {
        left: "".concat(left, "%"),
        top: "".concat(top, "%"),
        transform: "translate(-50%, -50%)",
        position: "absolute"
      }
    }
  };
};

exports.StickyIn = StickyIn;

var StickyOut = function StickyOut() {
  var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  return {
    "in": {
      style: {
        left: "".concat(left, "%"),
        top: "".concat(top, "%"),
        transform: "translate(-50%, -50%)",
        position: "absolute"
      }
    },
    out: {
      style: {
        left: "".concat(left, "%"),
        top: "".concat(top, "%"),
        transform: "translate(-50%, -50%)",
        position: "fixed"
      }
    }
  };
};

exports.StickyOut = StickyOut;