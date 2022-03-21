let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const URL = 'https://rickandmortyapi.com/api/character/';

function fetchData(URL, callback) {
    let data = new XMLHttpRequest();
    data.open('GET', URL, true);
    data.onreadystatechange = function (event) {
        if (data.readyState === 4) {
            if (data.status === 200) {
                callback(null, JSON.parse(data.responseText));
            } else {
                const error = new Error(`Error ${URL}`)
                return callback(error, null)
            }
        }
    }
    data.send();
}

fetchData(URL, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(URL + data1.results[0].id, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1.info.count, data2.name, data3.dimension)
        });
    })
})
