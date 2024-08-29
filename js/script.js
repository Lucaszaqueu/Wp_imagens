const searchKey = document.getElementById("searchKey");
const searchBtn = document.getElementById("searchBtn");
const colum1 = document.getElementById("col-1");
const colum2 = document.getElementById("col-2");
const colum3 = document.getElementById("col-3");
const colum4 = document.getElementById("col-4");
const erroGrid = document.getElementById("erroGrid"); 

let imageURLS = [];

window.onload = () => {
    fetchData();
}

const displayImage = () => {
    const columns = [colum1, colum2, colum3, colum4];
    const fragments = [document.createDocumentFragment(), 
        document.createDocumentFragment(), 
        document.createDocumentFragment(),
        document.createDocumentFragment()];

    columns.forEach(column => column.innerHTML = "");

    imageURLS.forEach((url, index) => {
        const image = document.createElement('img');
        image.src = url; 
        image.className="mt-3";
        image.setAttribute("width", "100%");

        const fragmentIndex = index % 4;
        fragments[fragmentIndex].appendChild(image);
    });

    columns.forEach((column, index) => column.appendChild(fragments[index]));
}

function search(event) {
    event.preventDefault();
    if(searchKey.value != ''){
        fetchSearchData(searchKey.value);
    }
}

function searchItens(query) {
    if (query !== '') {
        fetchSearchData(query);
        return;
    }
}