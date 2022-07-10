const API_BASE = 'http://localhost:28785/api/v1/animals';

function fill(element){
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

function  getData(){
    let data = JSON.stringify({
        name: document.getElementById("name").value,
        class: document.getElementById("class").value,
        origin: document.getElementById("origin").value,
        weight_min: parseInt(document.getElementById("weight_min").value),
        weight_max: parseInt(document.getElementById("weight_max").value),
        feed: document.getElementById("feed").value,
        size: parseFloat(document.getElementById("size").value)

    })

    return data;
}


async function addItem(item) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const body = item;
    const init = {
        method: "put",
        headers,
        body,
    };
    console.log(body);
    fetch(API_BASE, init)
        .then(function (response){
            console.log(response)
            getAllItems();
            return response.json();

            //return Promise.reject(response);
        }).then(() =>{
        }
    ).catch((e) => {
        console.warn("Something went wrong", e);
    });
}


async function getAllItems() {
    fetch(API_BASE)
        .then((response) => {
            return response.json();
        })
        .then((text) => {
            console.log(text);
            text=text.animals


            function addHeaders(table, keys) {
                const row = table.insertRow();
                for (let i = 0; i < keys.length; i++) {
                    const cell = row.insertCell();
                    cell.appendChild(document.createTextNode(keys[i]));
                }
            }

            const table = document.createElement("table");
            for (let i = 0; i < text.length; i++) {
                const child = text[i];
                if (i == 0) {
                    addHeaders(table, Object.keys(child));
                }
                const row = table.insertRow();
                Object.keys(child).forEach(function (k) {
                    const cell = row.insertCell();
                    cell.appendChild(document.createTextNode(child[k]));

                })
            }
            document.getElementById("container").appendChild(table);

        })
        .catch((e) => {
            console.log(e);
        });
}



window.onload = () => {
    getAllItems();
}


document.getElementById("erstellen").addEventListener("click", async function (e) {
    const data = getData()
    await fetch(API_BASE, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: data
    });

})