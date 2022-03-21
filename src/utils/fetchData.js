let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (URL) => {
    return new Promise((resolve, reject) => {
        const data = new XMLHttpRequest();
        data.open('GET', URL, true);
        data.onreadystatechange = (() => {
            if (data.readyState === 4) {
                (data.status === 200) 
                ? resolve(JSON.parse(data.responseText))
                : reject(new Error("Error!"))
            }
        });
        data.send();
    });
}

module.exports = fetchData;
