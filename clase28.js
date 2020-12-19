const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/'

const opts = {crossDomain:true}


const obtenerPersonaje = function(id, callback){
    $.get(`${API_URL}${PEOPLE_URL}${id}`,opts, function(data){
        
            console.log(`Hola soy ${data.name}`)

            if(callback){
                callback()
            }
    })
}

/*
Esto no nos garantiza que el resultado de la función sea en el mismo orden del que se le llama
for(i=1;i<=5;i++){
    obtenerPersonaje(i)
}*/

/*
obtenerPersonaje(1, obtenerPersonaje(2))
Esto si lo llamamos de esta manera hará que primero se ejecute la función que esta dentro de los párametros 
para que esto no suceda y lo que que se llame sea después de ejecutar la primera función debemos definir la 
función como en el siguiente párrafo*/

obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5,function(){
                    obtenerPersonaje(6)
                })
            })
        })
    })
})
