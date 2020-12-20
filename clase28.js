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

obtenerPersonaje(1).then(function(data){
    console.log(`El personaje 1 es ${data.name}`)
}).catch(onError)
    

