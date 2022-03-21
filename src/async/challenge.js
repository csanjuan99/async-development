const fetchData = require('../utils/fetchData');
const URL = "https://rickandmortyapi.com/api/character/";

 anotherFunction = async () => {
    try {
        const data1 = await fetchData(URL);
        const data2 = await fetchData(URL + data1.results[0].id);
        const data3 = await fetchData(data2.origin.url);
        console.log(data1.info.count, data2.name, data3.dimension);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before');
anotherFunction(URL);
console.log('After');