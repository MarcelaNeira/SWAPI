'use strict'

var marcela = {
    nombre: "Marcela",
    apellidos: "Neira",
    edad:12,
    desarrolladora: true
}

function imprimirNombreEnMayusculas(persona){
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(marcela)
imprimirNombreEnMayusculas({nombre: "Raulº"})

function cumpleanos(persona){
    return{
        ...persona,
        edad: persona.edad+1
    }
}

function imprimirProfesion(persona){

    console.log(`${persona.nombre} es: `)

    if(persona.desarrolladora){
        console.log('Es desarrolladora')
    }
}

function imprimirSiEsMayorEdad(persona){
    if(persona.edad>=18){
        console.log(`${persona.nombre} es mayor de edad`)
    }
}

const MAYORIA_DE_EDAD = 18
const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

const permitirAcceso = persona => {
    if(!esMayorDeEdad(persona)){
        console.log("Acceso denegado")
    }
}

const saludar = () => console.log("Hola")

/* function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log("Acceso denegado")
    }
} */

const saludarConNombre = persona => console.log(`Hola ${persona.nombre}`)
