"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodedValue = void 0;
const transistorEncoder = [
    { color: "black", resistance: 0 },
    { color: "brown", resistance: 1 },
    { color: "red", resistance: 2 },
    { color: "orange", resistance: 3 },
    { color: "yellow", resistance: 4 },
    { color: "green", resistance: 5 },
    { color: "blue", resistance: 6 },
    { color: "violet", resistance: 7 },
    { color: "grey", resistance: 8 },
    { color: "white", resistance: 9 },
];
function decodedValue(...args) {
    let totalResistanceArray = [];
    args[0].map((color) => {
        const givenTransistor = transistorEncoder.filter((transistor) => transistor.color === color);
        if (args[0].indexOf(color) < 2) {
            totalResistanceArray.push(givenTransistor[0].resistance);
        }
        else {
            return;
        }
    });
    console.log(Number(totalResistanceArray.join("")));
}
exports.decodedValue = decodedValue;
decodedValue(["brown", "black", "yellow"]);
