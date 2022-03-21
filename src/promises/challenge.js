const fetchData = require('../utils/fetchData');
const URL = "https://rickandmortyapi.com/api/character/";

console.log('Before');
fetchData(URL)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${URL}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err));
console.log('After');