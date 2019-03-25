function getHeros(start, count) {
  
    var data = null;

    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "http://81.2.241.234:8080/hero?start=" + start + "& count=" + count+"& orderfield=name & orderdirection=ASC");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}

function getHeroById(id) {
    var data = null;

    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "http://81.2.241.234:8080/hero/" + id);
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}

function modifyHero(idYouWantToModify, newName, newDesc) {
    var data = new FormData();
    data.append("name", newName);
    data.append("desc", newDesc);

    var xhr = new XMLHttpRequest();
   // xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("PUT", "http://81.2.241.234:8080/hero/" + idYouWantToModify);
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}
function deleteHeroById(id) {
    var data = null;

    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("DELETE", "http://81.2.241.234:8080/hero/" + id);
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}

function addHero(name, desc) {
    var data = new FormData();
    data.append("name", name);
    data.append("desc", desc);

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://81.2.241.234:8080/hero");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}

//species:

function getSpecies(start, count) {

    var data = null;

    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "http://81.2.241.234:8080/hero?species=" + start + "& count=" + count + "& orderfield=name & orderdirection=ASC");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}

function getSpecieById(id) {
    var data = null;

    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "http://81.2.241.234:8080/species/" + id);
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}

function modifySpecie(idYouWantToModify, newName, newDesc) {
    var data = new FormData();
    data.append("name", newName);
    data.append("desc", newDesc);

    var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("PUT", "http://81.2.241.234:8080/species/" + idYouWantToModify);
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}
function deleteSpecieById(id) {
    var data = null;

    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("DELETE", "http://81.2.241.234:8080/species/" + id);
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}

function addSpecie(name, desc) {
    var data = new FormData();
    data.append("name", name);
    data.append("desc", desc);

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://81.2.241.234:8080/species");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}

