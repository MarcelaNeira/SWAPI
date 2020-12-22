const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/'

const opts = {crossDomain:true}


const obtenerPersonaje = function(id, ){
    return new Promise(function(resolve, reject){
        $
        .get(`${API_URL}${PEOPLE_URL}${id}`,opts, function(data){
            resolve(data)
        })
        .fail(()=>reject(id))
    })
}

function onError(id){
    console.log(`Se produjo un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1).then(data=>{
    console.log(`El personaje 1 es ${data.name}`)
    return obtenerPersonaje(2)
}).then(personaje2=>{
    console.log(`El personaje 2 es ${personaje2.name}`)
    return obtenerPersonaje(3)
}).then(personaje3=>{
    console.log(`El personaje 3 es ${personaje3.name}`)
    return obtenerPersonaje(4)
}).then(personaje4=>{
    console.log(`El personaje 4 es ${personaje4.name}`)
    return obtenerPersonaje(5)
}).then(personaje5=>{
    console.log(`El personaje 5 es ${personaje5.name}`)
    return obtenerPersonaje(6)
}).then(personaje6=>{
    console.log(`El personaje 6 es ${personaje6.name}`)
})
.catch(onError)
    

