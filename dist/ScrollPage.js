"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ScrollContext_1 = require("./ScrollContext");
var ScrollPage = function (_a) {
    var children = _a.children, page = _a.page;
    return (react_1.default.createElement("div", { style: { margin: 0, padding: 0, height: "100vh", position: "relative" } },
        react_1.default.createElement(ScrollContext_1.ScrollPageContext.Provider, { value: { page: page } }, children)));
};
exports.default = ScrollPage;
