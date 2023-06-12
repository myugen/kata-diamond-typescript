"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiamondKata = void 0;
var DiamondKata = /** @class */ (function () {
    function DiamondKata(printer) {
        this.printer = printer;
    }
    DiamondKata.prototype.render = function (shape) {
        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
        var currentPosition = alphabet.indexOf(shape);
        var totalOfColumns = 2 * currentPosition + 1;
        var matrix = [];
        for (var row = 0; row <= currentPosition; row++) {
            var currentLetter = alphabet[row];
            var level = this.createTemplateFor(totalOfColumns);
            var first = currentPosition - row;
            var last = currentPosition + row;
            level[first] = currentLetter;
            level[last] = currentLetter;
            matrix.push(level);
        }
        var upperLevel = __spreadArray([], matrix, true);
        var lowerLevel = __spreadArray([], matrix.reverse().splice(1), true);
        var diamond = __spreadArray(__spreadArray([], upperLevel, true), lowerLevel, true);
        this.printer.print(diamond.map(function (f) { return f.join(""); }).join("\n"));
    };
    DiamondKata.prototype.createTemplateFor = function (index) {
        var template = [];
        for (var i = 0; i < index; i++) {
            template.push(" ");
        }
        return template;
    };
    return DiamondKata;
}());
exports.DiamondKata = DiamondKata;
