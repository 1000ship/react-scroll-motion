"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleInterpolation = void 0;
var SimpleInterpolation = function (from, to, value) {
    return from * (1 - value) + to * value;
};
exports.SimpleInterpolation = SimpleInterpolation;
