const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = {crossDomain: true};

function obtenerPersonaje(id, callback) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        // $
        // .get(url, opts, function(data) {
        //     resolve(data)
        // })
        // .fail(() => reject(id))

        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(() => reject(id));
    })
}

function onError(id) {
    console.log(`Sucedió un error al obtener al personaje ${id}`);
}

// Async await - usamos try catch
async function obtenerPersonajes() {
    // Múltiples promesas en paralelo
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id));

    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}
obtenerPersonajes()
