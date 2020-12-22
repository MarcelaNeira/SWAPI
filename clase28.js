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

async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6,7,8,9]
    var promesas = ids.map(id=>obtenerPersonaje(id))
    try{
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    }catch(id){
        onError(id)
    }
    
}

obtenerPersonajes()
    

