"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.batch = void 0;
var callIfFunc = function (value) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    return typeof value === "function" ? value.apply(void 0, params) : value;
};
var batch = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var animations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        animations[_i] = arguments[_i];
    }
    var batched = { in: { style: {} }, out: { style: {} } };
    var batchedTransform = {
        in: [],
        out: [],
    };
    for (var _o = 0, animations_1 = animations; _o < animations_1.length; _o++) {
        var animation = animations_1[_o];
        if ((_a = batched === null || batched === void 0 ? void 0 : batched.in) === null || _a === void 0 ? void 0 : _a.style)
            batched.in.style = __assign(__assign({}, (_b = batched === null || batched === void 0 ? void 0 : batched.in) === null || _b === void 0 ? void 0 : _b.style), (_c = animation === null || animation === void 0 ? void 0 : animation.in) === null || _c === void 0 ? void 0 : _c.style);
        if ((_d = batched === null || batched === void 0 ? void 0 : batched.out) === null || _d === void 0 ? void 0 : _d.style)
            batched.out.style = __assign(__assign({}, (_e = batched === null || batched === void 0 ? void 0 : batched.out) === null || _e === void 0 ? void 0 : _e.style), (_f = animation === null || animation === void 0 ? void 0 : animation.out) === null || _f === void 0 ? void 0 : _f.style);
        if ((_h = (_g = animation === null || animation === void 0 ? void 0 : animation.in) === null || _g === void 0 ? void 0 : _g.style) === null || _h === void 0 ? void 0 : _h.transform)
            batchedTransform.in.push(animation.in.style.transform);
        if ((_k = (_j = animation === null || animation === void 0 ? void 0 : animation.out) === null || _j === void 0 ? void 0 : _j.style) === null || _k === void 0 ? void 0 : _k.transform)
            batchedTransform.out.push(animation.out.style.transform);
    }
    if (batchedTransform.in.length > 0 && ((_l = batched === null || batched === void 0 ? void 0 : batched.in) === null || _l === void 0 ? void 0 : _l.style))
        batched.in.style.transform = function (value) {
            return batchedTransform.in.map(function (t) { return callIfFunc(t, value); }).join(" ");
        };
    if (batchedTransform.out.length > 0 && ((_m = batched === null || batched === void 0 ? void 0 : batched.out) === null || _m === void 0 ? void 0 : _m.style))
        batched.out.style.transform = function (value) {
            return batchedTransform.out.map(function (t) { return callIfFunc(t, value); }).join(" ");
        };
    return batched;
};
exports.batch = batch;
