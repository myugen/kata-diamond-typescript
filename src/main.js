"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var diamond_kata_js_1 = require("./diamond-kata.js");
var SystemPrinter = /** @class */ (function () {
    function SystemPrinter() {
    }
    SystemPrinter.prototype.print = function (input) {
        console.log(input);
    };
    return SystemPrinter;
}());
var diamond = new diamond_kata_js_1.DiamondKata(new SystemPrinter());
diamond.render("G");
