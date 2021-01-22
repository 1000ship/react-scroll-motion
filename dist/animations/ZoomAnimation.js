"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomOut = exports.ZoomIn = exports.Zoom = void 0;
var interpolation_1 = require("../utils/interpolation");
var Zoom = function (from, to) {
    if (from === void 0) { from = 10; }
    if (to === void 0) { to = 1; }
    return ({
        in: {
            style: {
                transform: function (value) { return "scale(" + interpolation_1.SimpleInterpolation(from, to, value) + ")"; },
            },
        },
        out: {
            style: {
                transform: function (value) { return "scale(" + interpolation_1.SimpleInterpolation(to, from, value) + ")"; },
            },
        },
    });
};
exports.Zoom = Zoom;
var ZoomIn = function (from, to) {
    if (from === void 0) { from = 10; }
    if (to === void 0) { to = 1; }
    return ({
        in: {
            style: {
                transform: function (value) { return "scale(" + interpolation_1.SimpleInterpolation(from, to, value) + ")"; },
            },
        },
    });
};
exports.ZoomIn = ZoomIn;
var ZoomOut = function (from, to) {
    if (from === void 0) { from = 1; }
    if (to === void 0) { to = 10; }
    return ({
        out: {
            style: {
                transform: function (value) { return "scale(" + interpolation_1.SimpleInterpolation(from, to, value) + ")"; },
            },
        },
    });
};
exports.ZoomOut = ZoomOut;
