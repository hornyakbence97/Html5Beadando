


function getHeros(start, count) {

    var data = null;

    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            $('#loadingRow').remove();
            if (this.status === 200) {
                console.log(this.responseText);
                ProcessHeros(this.responseText);
            }
            else {
                $('#table').append('<tr><td>Server unreachable</td><td>Server unreachable</td><td>Server unreachable</td><td>Server unreachable</td><td>Server unreachable</td></tr>');
            }
        }
    });

    xhr.open("GET", "http://81.2.241.234:8080/hero?start=" + start + "& count=" + count + "& orderfield=name & orderdirection=ASC");


    xhr.send(data);
}
function ProcessHeros(json) {
   
    var lista = JSON.parse(json);
    var lenghth = Object.keys(lista).length; //hossza
    lastDataNumberArrived = lenghth;

    if (lenghth > 0) {
        for (var i = 0; i < lenghth; i++) {
            $('#table').append('<tr><td>' + lista[i].id + '</td><td>' + lista[i].name + '</td><td>' + lista[i].description + '</td><td><a href="#" onclick="Modify(' + lista[i].id + ');">Modify</a></td><td><a href="#" onclick="Delete(' + lista[i].id + ');">Delete</a></td></tr>');
        }
    }
}
function getHeroById(id) {
    var data = null;

    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                console.log(this.responseText);

                $('#loading').remove();
                $('#modifyButton').prop('disabled', false);
                $('#Id').prop('disabled', true);
                $('#name').prop('disabled', false);
                $('#desc').prop('disabled', false);

                $('#modifyButton').on("click", function () {
                    var loading = "<img id='loading' src= 'https://loading.io/spinners/curve-bars/lg.curved-bar-spinner.gif' style='width:50px; height:50px;'/>";
                   
                    modifyHero($('#Id').val(), $('#name').val(), $('#desc').val());
                    document.getElementById("mp").innerHTML = "<h2>Saving modifications in progress...</h2><br>" + loading;
                });

                var json = JSON.parse(this.responseText);
                $('#Id').val(json.id);
                $('#name').val(json.name);
                $('#desc').val(json.description);



            }
            else {
                alert("Can't load the data for the selected id. Server unreachable.");
                $('#loading').remove();
                $('#Id').val("Server unreachable");
                $('#name').val("Server unreachable");
                $('#desc').val("Server unreachable");
                $('#modifyButton').prop('disabled', true);
            }
        }
    });

    xhr.open("GET", "http://81.2.241.234:8080/hero/" + id);

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
            if (this.status === 200) {
                console.log(this.responseText);
                $("#mp").html("<h2>Succesfull. Click <a href='#' onclick='StartAgain();'>here</a> to go back all heros.</h2>");

            }
            else {
                $("#mp").html("<h2>Error during the process. Server unreachable. Try again later. Click <a href='#' onclick='StartAgain();'>here</a> to go back all heros.</h2>");
            }
        }
    });

    xhr.open("PUT", "http://81.2.241.234:8080/hero/" + idYouWantToModify);


    xhr.send(data);
}
function deleteHeroById(id) {
    var data = null;

    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            $('#loadingRow').remove();
            if (this.status === 200) {
                console.log(this.responseText);
                alert(id + " succesfully deleted!");
                StartAgain();
            }
            else {
                alert(id + " wasn't deleted. Maybe server was unreachable. Try again.");
            }
        }
    });

    xhr.open("DELETE", "http://81.2.241.234:8080/hero/" + id);


    xhr.send(data);
}

function addHero(name, desc) {
    var data = new FormData();
    data.append("name", name);
    data.append("desc", desc);

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                console.log(this.responseText);
                $("#mp").html("<h2>Succesfully added new hero. Click <a href='#' onclick='StartAgain();'>here</a> to go back all heros.</h2>");
            }
            else {
                $("#mp").html("<h2>Error during the process. Try again later. Click <a href='#' onclick='StartAgain();'>here</a> to go back all heros.</h2>");

            }
        }
    });

    xhr.open("POST", "http://81.2.241.234:8080/hero");


    xhr.send(data);
}



function Modify(id) {
    var loading = "<img id='loading' src= 'https://loading.io/spinners/curve-bars/lg.curved-bar-spinner.gif' style='width:50px; height:50px;'/>";
    var m = '<div class="container">';
    m += '<h2>Modify</h2>';
    m += loading;
        //<form action="/action_page.php">
    m += '<div class="form-group"><label for="Id">Id:</label><input type="text" class="form-control" id="Id" placeholder="Loading..." name="Id" disabled></div>';
    m += '<div class="form-group"><label for="name">Name:</label><input type="text" class="form-control" id="name" placeholder="Loading..." name="name"></div><div class="form-group">';
      m +='<label for="desc">Description:</label><input type="text" class="form-control" id="desc" placeholder="Loading..." name="desc"></div><button id="modifyButton"  class="btn btn-primary">Modify</button>';
  //</form>
    m += '      <a href="#" onclick="StartAgain();">Go back to all heros</a> </div>';
    document.getElementById("mp").innerHTML = m;
    $('#modifyButton').prop('disabled', true);
    $('#Id').prop('disabled', true);
    $('#name').prop('disabled', true);
    $('#desc').prop('disabled', true);
    getHeroById(id);
}
function Delete(id) {
    var loading = "<img src= 'https://loading.io/spinners/curve-bars/lg.curved-bar-spinner.gif' style='width:50px; height:50px;'/>";

    var m = "<tr id='loadingRow'><td>" + loading + "</td><td>" + loading + "</td><td>" + loading + "</td><td>" + loading + "</td><td>" + loading + "</td></tr>";
    $('#table').append(m);
    deleteHeroById(id);
}
function AddNewOne() {
    var loading = "<img id='loading' src= 'https://loading.io/spinners/curve-bars/lg.curved-bar-spinner.gif' style='width:50px; height:50px;'/>";
    var m = '<div class="container">';
    m += '<h2>Add new one Specie</h2>';
    m += loading;
    m += '<div class="form-group"><label for="name">Name:</label><input type="text" class="form-control" id="name" placeholder="Enter name here..." name="name"></div><div class="form-group">';
    m += '<label for="desc">Description:</label><input type="text" class="form-control" id="desc" placeholder="Enter description here..." name="desc"></div><button id="modifyButton"  class="btn btn-primary">Add new one</button>';
    m += '      <a href="#" onclick="StartAgain();">Go back to all heros</a> </div>';
    document.getElementById("mp").innerHTML = m;
    $("#loading").prop("hidden", true);
    $("#modifyButton").on("click", function () {
        $("#loading").prop("hidden", false);
        $("#name").prop("disabled", true);
        $("#desc").prop("disabled", true);
        $("#modifyButton").prop("disabled", true);
        addHero($("#name").val(), $("#desc").val());
    });
}

var startRows = 0;
var rows = 10;
var lastDataNumberArrived = 0;

function StartAgain() {

    var mp = document.getElementById("mp");

     var m = '<h2>List of Heros</h2><a href="#" onclick="AddNewOne();">Add new Hero</a><table id="table" name="table" class="table table-dark table-hover"><thead><tr><th>Id</th><th>Name</th><th>Description</th><th>Modify</th><th>Delete</th></tr></thead><tbody>';
    var loading = "<img src= 'https://loading.io/spinners/curve-bars/lg.curved-bar-spinner.gif' style='width:50px; height:50px;'/>";

    m += "<tr id ='loadingRow'><td>" + loading + "</td><td>" + loading + "</td><td>" + loading + "</td><td>" + loading + "</td><td>" + loading + "</td></tr>";
    m += "</tbody></table>";
    m += '<a style="float:left; background-color:black;" href="#" onclick="Previous();" id="prev">Previous 10 row</a>';
    m += '<a style="float:right; background-color:black;" href="#" onclick="Next();" id="next">Next 10 row</a>';

    mp.innerHTML = m;

    getHeros(startRows, rows);
}
function Previous() {
    if (startRows !== 0) {
        startRows -= 10;

        StartAgain();
    }
}
function Next() {
    if (lastDataNumberArrived === rows) {
        startRows += 10;
        StartAgain();
    }
}   

$('document').ready(function () {
    


    function Start() {
        var mp = document.getElementById("mp");

        var m = '<h2>List of Heros</h2><a href="#" onclick="AddNewOne();">Add new Hero</a><table id="table" name="table" class="table table-dark table-hover"><thead><tr><th>Id</th><th>Name</th><th>Description</th><th>Modify</th><th>Delete</th></tr></thead><tbody>';
        var loading = "<img id='loading' src= 'https://loading.io/spinners/curve-bars/lg.curved-bar-spinner.gif' style='width:50px; height:50px;'/>";

        m += "<tr id='loadingRow'><td>" + loading + "</td><td>" + loading + "</td><td>" + loading + "</td><td>" + loading + "</td><td>" + loading + "</td></tr>";
        m += "</tbody></table>";
        m += '<a style="float:left; background-color:black;" href="#" onclick="Previous();" id="prev">Previous 10 row</a>';
        m += '<a style="float:right; background-color:black;" href="#" onclick="Next();" id="next">Next 10 row</a>';

        mp.innerHTML = m;

        getHeros(startRows, rows);
    }


    Start();
});


