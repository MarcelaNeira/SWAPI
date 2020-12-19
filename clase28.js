const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/'
const opts = {crossDomain:true}
const onPeopleResponse =  function(data){
    console.log(`Hola soy ${data.name}`)
}

$.get(`${API_URL}${PEOPLE_URL}1`,opts,onPeopleResponse)

