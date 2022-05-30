const kelvin = 293;
//defino Kelvin
const celsius = kelvin - 293;
//defino celsius
let fahrenheit = celsius * (9 / 5 ) + 32;
//defino fahrenheit
fahrenheit = Math.floor(fahrenheit);
//redondeo fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius *(33/100);
//Convierto a N
newton = Math.floor(newton);
//Redondeo
console.log(`The temperature is ${newton} degrees Newton.`)
