"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FadeOut = exports.FadeIn = exports.Fade = void 0;
var interpolation_1 = require("../utils/interpolation");
var Fade = function (from, to) {
    if (from === void 0) { from = 0; }
    if (to === void 0) { to = 1; }
    return ({
        in: {
            style: {
                opacity: function (value) { return interpolation_1.SimpleInterpolation(from, to, value); },
            },
        },
        out: {
            style: {
                opacity: function (value) { return interpolation_1.SimpleInterpolation(to, from, value); },
            },
        },
    });
};
exports.Fade = Fade;
var FadeIn = function (from, to) {
    if (from === void 0) { from = 0; }
    if (to === void 0) { to = 1; }
    return ({
        in: {
            style: {
                opacity: function (value) { return interpolation_1.SimpleInterpolation(from, to, value); },
            },
        },
    });
};
exports.FadeIn = FadeIn;
var FadeOut = function (from, to) {
    if (from === void 0) { from = 0; }
    if (to === void 0) { to = 1; }
    return ({
        out: {
            style: {
                opacity: function (value) { return interpolation_1.SimpleInterpolation(from, to, value); },
            },
        },
    });
};
exports.FadeOut = FadeOut;
