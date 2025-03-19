const prompt = require('prompt-sync')(); // Necesitas instalar el paquete prompt-sync para usarlo

// Paso 1: Entrada
let numPersonas = parseInt(prompt("Ingrese el número de personas que desea registrar: "));
let personas = [];

for (let i = 0; i < numPersonas; i++) {
    let nombre = prompt(`Ingrese el nombre de la persona ${i + 1}: `);
    let edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1}: `));
    let nota = parseFloat(prompt(`Ingrese la nota de la persona ${i + 1}: `));
    personas.push([nombre, edad, nota]);
}

// Paso 2: Procesamiento
// Ordenar la lista principal en función de las notas, de mayor a menor
let personasOrdenadas = [...personas].sort((a, b) => b[2] - a[2]);

// Paso 3: Salida
console.log("Lista de personas tal como fueron ingresadas:");
personas.forEach(persona => {
    console.log(`Nombre: ${persona[0]}, Edad: ${persona[1]}, Nota: ${persona[2]}`);
});

console.log("\nLista de personas ordenadas por nota (de mayor a menor):");
personasOrdenadas.forEach(persona => {
    console.log(`Nombre: ${persona[0]}, Edad: ${persona[1]}, Nota: ${persona[2]}`);
});