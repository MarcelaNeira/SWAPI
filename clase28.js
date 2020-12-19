const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/'

$.get(`${API_URL}${PEOPLE_URL}1`,{crossDomain:true}, function(data){
    console.log(`Hola soy ${data.name}`)
})

