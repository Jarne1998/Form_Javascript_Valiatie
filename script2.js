window.addEventListener("load", init, false);

// Variables
var voornaam = document.getElementById("voornaam");
var naam = document.getElementById("naam");
var gebruikersnaam = document.getElementById("gebruikersnaam");
var adres = document.getElementById("adres");
var land = document.getElementById("land");
var provincie = document.getElementById("provincie");
var errorElement = document.getElementById("error");
var formSubmit = document.getElementById("form");

function init() {
  formSubmit.addEventListener("submit", valideer, false);
}

function valideerVoornaam() {
  var firstName = document.getElementById("voornaam").value;
  if (firstName.length < 2) {
    console.log("naam langer dan 2!");
    return false;
  }
  return true;
}

function isGeldigEmailAdres(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

function valideerEmail() {
  var emailaddress = document.getElementById("email").vlaue;
  if (!isGeldigEmailAdres(emailaddress)) {
    console.log("email is fout");
    return false;
  }
  return true;
}

function valideer(event) {
  var emailOk = valideerEmail();
  var voornaamOK = valideerVoornaam();
  if (!(emailOk || voornaamOK)) {
    alert("iets is fout");
    event.preventDefault();
  }
}
