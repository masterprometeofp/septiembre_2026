/* let nombre = "Byron";
console.log(nombre);
nombre = "Kuro";
console.log(nombre);

const tipo = "perro"; */

// SCOPE

// SCOPE GLOBAL
const nombre = "Pepe";

if (true) {
    // SCOPE LOCAL
	console.log(nombre);
    const apellido = "Gonzalez"
    console.log(apellido)
}

while(true){
    console.log("Hola")
}