// + String -> Concatenación
const frase1 = "Mañana va a hacer mucho ";
const frase2 = "calor al mediodia.";
console.log(frase1 + frase2);
console.log("Hola " + "me llamo " + "Pepito" + " y tengo " + 34 + " años.");

// Operadores aritméticos
const num1 = 5 + 5;
console.log(num1);
const num2 = 5 - 2;
console.log(num2);
const num3 = 5 * 5;
console.log(num3);
const num4 = 5 / 2;
console.log(num4);
const num5 = 3 % 2;
console.log(num5);

// Operadores lógicos
console.log("5 > 6", 5 > 6);
console.log("5 >= 5", 5 >= 5);
console.log("5 < 6", 5 < 6);
console.log("5 <= 5", 5 <= 5);

console.log(5 == "5");
console.log(5 === 5);
console.log(5 !== 2);

// NaN -> Not a Number
console.log(isNaN("27.8"));

// OR -> ||
// AND -> &&
// NOT -> !

console.log(true && false);
console.log(true || true);
console.log(!true);
console.log(!false)

// Truthy y falsy
console.log(Boolean(null))