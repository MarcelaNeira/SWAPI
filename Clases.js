class Persona{
    constructor (nombre, apellido, altura){

    this.nombre =nombre
    this.apellido = apellido
    this.altura = altura
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto = function(){
    if(this.altura>1.5)
    console.log('Soy una persona alta')
    
    }
}


class Desarrollador extends Persona{

    constructor (nombre, apellido, altura){
        super(nombre,apellido,altura)
    }

    saludar(fn){
        var nombre = this.nombre
        var apellido = this.apellido
        console.log(`Hola, me llamo ${nombre} ${apellido} Soy Desarrolladora`)
       if(fn){
            fn(nombre,apellido,true)
       }
        
    }
}


function responderSaludo(nombre,apellido,esDev){

    console.log(`Hola ${nombre} ${apellido} buen día `)
    if(esDev){
        console.log(`Mirá no sabia que eras desarrolladora`)
    }
}

var made = new Persona("Made","Sanchez",1.60) 
var marcela = new Desarrollador("Marcela","Neira",1.50) 
var santi = new Persona("Santiago","Bladeón",1.40) 

made.saludar()
marcela.saludar(responderSaludo)
santi.saludar(responderSaludo)