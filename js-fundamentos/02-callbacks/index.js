const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = {crossDomain: true};

// const onPeopleResponse = persona =>
//     console.log(`Hola, yo soy ${persona.name}`)

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    // $
    // .get(url, opts, callback)
    // .fail(() => {
    //     console.log(`Ocurrió un error! no se pudo obtener el personaje ${id}`);
    // })
    fetch(url)
        .then(response => response.json())
        .then(callback)
        .catch(error => {
            console.log(`Hubo un problema con la petición Fetch, error: ${error.message}, no se pudo obtener el personaje ${id}`);
          });
    
    // if (callback) {
    //     callback()
    // }
}
obtenerPersonaje(1, function(persona) {
    console.log(`Hola, yo soy ${persona.name}`)

    obtenerPersonaje(2, function(persona) {
        console.log(`Hola, yo soy ${persona.name}`)

        obtenerPersonaje(3, function(persona) {
            console.log(`Hola, yo soy ${persona.name}`)

            obtenerPersonaje(4, function(persona) {
                console.log(`Hola, yo soy ${persona.name}`)

                obtenerPersonaje(5, function(persona) {
                    console.log(`Hola, yo soy ${persona.name}`)

                    obtenerPersonaje(6, function(persona) {
                        console.log(`Hola, yo soy ${persona.name}`)
                        
                        obtenerPersonaje(7, function(persona) {
                            console.log(`Hola, yo soy ${persona.name}`)
                        })    
                    })
                })
            })
        })
    })
})

// Con JQuery
// $.get(lukeUrl, opts, onPeopleResponse)

// Con Fetch
// fetch(lukeUrl)
// .then(response => response.json())
// .then(onPeopleResponse);