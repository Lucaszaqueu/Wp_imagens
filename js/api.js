const API_KEY = "6f-sCitQimhcRA64gTGwAlSna825vpJBHgYvpHfu-do"
const apiUrl = `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=30&page=1`;
const searchUrl = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&per_page=30&page=1&query=`;

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const myJson = await response.json();

        const imageArrays = myJson;

        imageArrays.forEach(element => {
            imageURLS.push(element.urls.regular);
        });

        displayImage();
    } catch (errorMsg) {
        handleError(errorMsg);
    }
}

async function fetchSearchData(key) {
    try {
        imageURLS = [];

        const response = await fetch(`${searchUrl}${key}`);
        const myJson = await response.json();

        const imageArrays = myJson.results;

        imageArrays.forEach(element => {
            imageURLS.push(element.urls.regular);
        });

        displayImage();
    } catch (errorMsg) {
        handleError(errorMsg);
    }
}

function handleError(errorMsg) {
    console.log(errorMsg);
    erroGrid.innerHTML = ("Não foi possível buscar os dados " + errorMsg);
}