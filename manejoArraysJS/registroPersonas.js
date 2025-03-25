const prompt = require('prompt-sync')();

//Entrada
let numPersonas = parseInt(prompt("Ingrese el número de personas que desea registrar: "));
let personas = [];

for (let i = 0; i < numPersonas; i++) {
    let nombre = prompt(`Ingrese el nombre de la persona ${i + 1}: `);
    let edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1}: `));
    let nota = parseFloat(prompt(`Ingrese la nota de la persona ${i + 1}: `));
    personas.push([nombre, edad, nota]);
}

// Procesamiento
let personasOrdenadas = [...personas].sort((a, b) => b[2] - a[2]);

// Salida
console.log('\nPersonas ordenadas por edad');
personas.forEach(persona => {
    console.log(`Nombre: ${persona[0]}, Edad: ${persona[1]}, Nota: ${persona[2]}`);
});

console.log('\nPersonas ordenadas por nota');
personasOrdenadas.forEach(persona => {
    
    console.log(`Nombre: ${persona[0]}, Edad: ${persona[1]}, Nota: ${persona[2]}`);
});

