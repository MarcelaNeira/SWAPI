var marcela = {
    nombre: "Marcela",
    apellido: "Neira",
    peso: 80,
    altura: 1.52,
    libros: 111
}
var norton = {
    nombre: "Norton",
    apellido: "Baldeón",
    peso: 90,
    altura: 1.72,
    libros: 45
}

var made = {
    nombre: "Made",
    apellido: "Sanchez",
    peso: 70,
    altura: 1.62,
    libros: 85
}
var santi = {
    nombre: "Santi",
    apellido: "Baldeón",
    peso: 42,
    altura: 1.48,
    libros: 50
}

//const esGorda = persona => persona.peso > 75
//var personasGordas = personas.filter(esGorda)
var personas = [marcela, norton, made]

var personasGordas = personas.filter(function(persona){
    return persona.peso > 75
})

const pasarAlturaACms = persona => ({

    ...persona,
        peso: persona.peso+10
})

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)

const reducer = (acum, persona) => acum+persona.libros
var totalDeLibros = personas.reduce(reducer,0)
console.log(`En total hay : ${totalDeLibros} libros`)