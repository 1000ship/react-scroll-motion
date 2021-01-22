"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollPageContext = exports.ScrollContainerContext = void 0;
var react_1 = require("react");
exports.ScrollContainerContext = react_1.createContext({});
exports.ScrollPageContext = react_1.createContext({ page: 0 });
