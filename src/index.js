const API_BASE = 'http://localhost:28785/api/v1/animals';

function fill(animals){
    document.getElementById("ID").value=element.name;
    document.getElementById("name").value=element.class;
    document.getElementById("origin").value=element.origin;
    document.getElementById("weight_min").value=element.weight_min;
    document.getElementById("weight_max").value=element.weight_max;
    document.getElementById("feed").value=element.feed;
    document.getElementById("size").value=element.size;

}

function getID(){
    return  document.getElementById("id").value;
}

function getData(){
    let data = JSON.stringify({
        name: document.getElementById("name").value,
        origin: document.getElementById("origin").value,
        weight_min: document.getElementById("weight_min").value,
        weight_max: document.getElementById("weight_max").value,
        feed: document.getElementById("feed").value,
        size: document.getElementById("size").value
    })

    return data;
}

async function getAllItems() {
    fetch(API_BASE)
        .then((response) => {
            return response.json();
        })
        .then((text) => {
            console.log(text);
        })






window.onload = () => {
        getAllItems();
}}




