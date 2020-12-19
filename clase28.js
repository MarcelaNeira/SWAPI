const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/'

const opts = {crossDomain:true}
const onPeopleResponse =  function(data){
    console.log(`Hola soy ${data.name}`)
}

const obtenerPersonaje = function(id){
    $.get(`${API_URL}${PEOPLE_URL}${id}`,opts,onPeopleResponse)
}

for(i=1;i<=5;i++){
    obtenerPersonaje(i)
}
