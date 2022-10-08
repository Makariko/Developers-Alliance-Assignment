//prevent form from refreshing
function func (e){
    event.preventDefault()

}


function Submit() {
    
    var dataEntered = retrieveData();
    var readData = readingDataFromLocalStorage(dataEntered);
    if(dataEntered == false) {
        alert('Please Enter Your First Name, Last Name and Address!');
    }
    else {

    insert(readData);
    }
 
}



function retrieveData() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var address = document.getElementById("address").value;
    var date = document.getElementById("date").value;
    var gender = document.getElementById("gender").value;
    var note = document.getElementById("note").value;
    


    var arr = [firstName, lastName, address, date, gender, note];
   
    //Required Fields 
    if (arr[0]==(""), arr[1]==(""), arr[2]==("")){
        return false;
    }
    else{
    return arr;
    }
   
}


//data in LocalStorage
function readingDataFromLocalStorage(dataEntered) {
var fname = localStorage.setItem("firstname", dataEntered[0]);
var lname = localStorage.setItem("lastname", dataEntered[1]);
var addr = localStorage.setItem("address", dataEntered[2]);
var dat = localStorage.setItem("date", dataEntered[3]);
var gend = localStorage.setItem("gender", dataEntered[4]);
var not = localStorage.setItem("note", dataEntered[5]);



// Getting values from local to table

var n = localStorage.getItem("firstname", fname);
var l = localStorage.getItem("lastname", lname);
var ad = localStorage.getItem("address", addr);
var da = localStorage.getItem("date", dat);
var gen = localStorage.getItem("gender", gend);
var nt = localStorage.getItem("note", not);


var arr = [n, l, ad, da, gen, nt];
return arr;

}


//inserting in the table

function insert(readData) {
    var row = table.insertRow(); 
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    
    cell1.innerHTML = readData[0];
    cell2.innerHTML = readData[1];
    cell3.innerHTML = readData[2];
    cell4.innerHTML = readData[3];
    cell5.innerHTML = readData[4];
    
    row.insertCell(5).innerHTML = `<button id = "notebtn" onClick="note(this)">Open Note</button>`;
    row.insertCell(6).innerHTML = `<button id ="deletbtn" onClick="remove(this)">Delete </button >`;
}



//delete and note buttons

function remove(td) {
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    
}

function note(td) {
    var note = document.getElementById("note").value;

    alert (note);
}

//FirstName and LastName Validations
function lettersOnly(input){
    var regex = /[^a-z]/gi;
    input.value = input.value.replace(regex,"");
}

