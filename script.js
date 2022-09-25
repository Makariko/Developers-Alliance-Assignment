function Submit() {
    var dataEntered = retrieveData();
    var readData = readingDataFromLocalStorage(dataEntered);

}

function retrieveData() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var address = document.getElementById("address").value;
    var date = document.getElementById("date").value;
    var gender = document.getElementById("gender").value;
    var note = document.getElementById("note").Value;


    var arr = [firstName, lastName, address, date, gender];
    return arr;

}

//data in LocalStorage
function  readingDataFromLocalStorage(dataEntered) {
var name = localStorage.setItem("firstname", dataEntered[0]);
var lname = localStorage.setItem("lastname", dataEntered[1]);
var addr = localStorage.setItem("address", dataEntered[2]);
var dat = localStorage.setItem("date", dataEntered[3]);
var gend = localStorage.setItem("gender", dataEntered[4]);


}