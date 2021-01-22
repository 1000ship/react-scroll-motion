"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StickyOut = exports.StickyIn = exports.Sticky = void 0;
var Sticky = function (left, top) {
    if (left === void 0) { left = 50; }
    if (top === void 0) { top = 50; }
    return ({
        in: {
            style: {
                left: left + "%",
                top: top + "%",
                transform: "translate(-50%, -50%)",
                position: "fixed",
            },
        },
        out: {
            style: {
                left: left + "%",
                top: top + "%",
                transform: "translate(-50%, -50%)",
                position: "fixed",
            },
        },
    });
};
exports.Sticky = Sticky;
var StickyIn = function (left, top) {
    if (left === void 0) { left = 50; }
    if (top === void 0) { top = 50; }
    return ({
        in: {
            style: {
                left: left + "%",
                top: top + "%",
                transform: "translate(-50%, -50%)",
                position: "fixed",
            },
        },
        out: {
            style: {
                left: left + "%",
                top: top + "%",
                transform: "translate(-50%, -50%)",
                position: "absolute",
            },
        },
    });
};
exports.StickyIn = StickyIn;
var StickyOut = function (left, top) {
    if (left === void 0) { left = 50; }
    if (top === void 0) { top = 50; }
    return ({
        in: {
            style: {
                left: left + "%",
                top: top + "%",
                transform: "translate(-50%, -50%)",
                position: "absolute",
            },
        },
        out: {
            style: {
                left: left + "%",
                top: top + "%",
                transform: "translate(-50%, -50%)",
                position: "fixed",
            },
        },
    });
};
exports.StickyOut = StickyOut;
