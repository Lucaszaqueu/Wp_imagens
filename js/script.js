const searchKey = document.getElementById("searchKey");
const searchBtn = document.getElementById("searchBtn");
const colum1 = document.getElementById("col-1");
const colum2 = document.getElementById("col-2");
const colum3 = document.getElementById("col-3");
const erroGrid = document.getElementById("erroGrid"); 

let imageURLS = [];

window.onload = () => {
    fetchData();
}

const displayImage = () => {
    colum1.innerHTML = "";
    colum2.innerHTML = "";
    colum3.innerHTML = "";

    const fragment1 = document.createDocumentFragment();
    const fragment2 = document.createDocumentFragment();
    const fragment3 = document.createDocumentFragment();

    imageURLS.forEach((url, index) => {
        const image = document.createElement('img');
        image.src = url; 
        image.className="mt-3";
        image.setAttribute("width", "100%");

        if ((index + 1) % 3 === 0) {
            fragment1.appendChild(image);
        } else if ((index + 2) % 3 === 0) {
            fragment2.appendChild(image);
        } else {
            fragment3.appendChild(image);
        }
    });

    colum1.appendChild(fragment1);
    colum2.appendChild(fragment2);
    colum3.appendChild(fragment3);
}

function search(event) {
    event.preventDefault();
    if(searchKey.value != ''){
        fetchSearchData(searchKey.value);
    }
}