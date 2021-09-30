/* 
Instructions
If you want to build something using a Raspberry Pi, you'll probably use resistors. For this exercise, you need to know two things about them:

Each resistor has a resistance value.
Resistors are small - so small in fact that if you printed the resistance value on them, it would be hard to read.
To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values. Each band has a position and a numeric value.

The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number. For example, if they printed a brown band (value 1) followed by a green band (value 5), it would translate to the number 15.

In this exercise you are going to create a helpful program so that you don't have to remember the values of the bands. The program will take color names as input and output a two digit number, even if the input is more than two colors!

The band colors are encoded as follows:

Black: 0
Brown: 1
Red: 2
Orange: 3
Yellow: 4
Green: 5
Blue: 6
Violet: 7
Grey: 8
White: 9
From the example above: brown-green should return 15 brown-green-violet should return 15 too, ignoring the third color.
*/

interface Transistor {
  color: string;
  resistance: number;
}

const transistorEncoder: Transistor[] = [
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

export function decodedValue(...args: any[]) {
  let totalResistanceArray: number[] = [];

  args[0].map((color: string) => {
    const givenTransistor: Transistor[] = transistorEncoder.filter(
      (transistor: Transistor) => transistor.color === color
    );
    if (args[0].indexOf(color) < 2) {
      totalResistanceArray.push(givenTransistor[0].resistance);
    } else {
      return;
    }
  });
  console.log(Number(totalResistanceArray.join("")));
}

decodedValue(["brown", "black", "yellow"]);
