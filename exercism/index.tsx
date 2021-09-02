//My first line of code
export function hello(): string {
  return "Hello, World!";
}

//twoFer - default params
export function twoFer(name = "you"): string {
  if (name === "you") {
    return "One for you, one for me.";
  }
  return `One for ${name}, one for me.`;
}

//is it a leap year??
export function isLeap(year: number) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
