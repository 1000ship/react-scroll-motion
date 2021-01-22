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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ScrollContext_1 = require("./ScrollContext");
var Animator = function (_a) {
    var _b, _c;
    var children = _a.children, _d = _a.animation, animation = _d === void 0 ? {} : _d;
    var _e = react_1.useContext(ScrollContext_1.ScrollContainerContext), currentPage = _e.currentPage, currentProgress = _e.currentProgress;
    var page = react_1.useContext(ScrollContext_1.ScrollPageContext).page;
    var filterStyle = function (style) {
        if (style === void 0) { style = {}; }
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var filteredStyle = __assign({}, style);
        for (var key in filteredStyle)
            if (typeof filteredStyle[key] === "function")
                filteredStyle[key] = filteredStyle[key].apply(filteredStyle, params);
        return filteredStyle;
    };
    var calculatedStyle = currentPage === page // for current (out)
        ? __assign({}, filterStyle((_b = animation === null || animation === void 0 ? void 0 : animation.out) === null || _b === void 0 ? void 0 : _b.style, currentProgress)) : currentPage === page - 1 // for next (in)
        ? __assign({}, filterStyle((_c = animation === null || animation === void 0 ? void 0 : animation.in) === null || _c === void 0 ? void 0 : _c.style, currentProgress)) : { display: "none" };
    return react_1.default.createElement("div", { style: calculatedStyle }, children);
};
exports.default = Animator;
