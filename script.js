window.addEventListener("load", init, false);

// Variables
var voornaam = document.getElementById("inputVoornaam");
// var naam = document.getElementById("inputNaam");
var gebruikersnaam = document.getElementById("inputGebruikersnaam");
var email = document.getElementById("inputMail");
var wachtwoord = document.getElementById("inputWachtwoord");
var wachtwoordHerhaal = document.getElementById("inputPassword4");
var adres = document.getElementById("inputAddress");
var land = document.getElementById("inputLand");
var provincie = document.getElementById("inputProvincie");
var postcode = document.getElementById("inputPostcode");
var errorElement = document.getElementById("error");
var formSubmit = document.getElementById("submitbtn");

// Array
const errorArray = [];

function init() {
  formSubmit.addEventListener("click", valideer, false);
}

// Voornaam verificatie
function valideerVoornaam(voornaam) {
  var regName = /[a-zA-Z]+/;
  var voornaam = document.getElementById("inputVoornaam").value;
  if (!regName.test(voornaam)) {
    console.log("voonaam is fout");
    errorArray.push("Het veld voornaam is verplicht.");
    return false;
  }
  return true;
}

// Naam verificatie
function valideerNaam(naam) {
  var regName = /[a-zA-Z]+/;
  var naam = document.getElementById("inputNaam").value;
  if (!regName.test(naam)) {
    console.log("naam is fout");
    errorArray.push("Het veld naam zijn verplicht.");
    return false;
  }
  return true;
}

// Gebruikersnaam verificatie
function valideerGebruikersnaam(gebruikersnaam) {
  var regName= /^[a-zA-Z0-9]+$/;
  var gebruikersnaam = document.getElementById("inputGebruikersnaam").value;
  if (gebruikersnaam.length == 0 && !regName.test(gebruikersnaam)) {
    errorArray.push("Het veld gebruikersnaam zijn verplicht.");
    return false;
  }
  return true;
}

// Watchwoord verificatie
function valideerWachtwoord(wachtwoord) {
  var wachtwoord = document.getElementById("inputWachtwoord").value;
  var wachtwoordHerhaal = document.getElementById("inputPassword4").value;
  if (wachtwoord == "") {
    errorArray.push("Het veld watchwoord is vereist.");
    return false;
  } else if (wachtwoord.length < 7) {
    errorArray.push("Watchwoord moet minstens 7 karakters bevatten.");
    return false;
  }
  if (wachtwoordHerhaal == "") {
    errorArray.push("Het veld herhaal watchwoord is vereist.");
    return false;
  }
  if (wachtwoord != wachtwoordHerhaal) {
    errorArray.push("Ingegeven wachtwoordvelden komen niet overeen.");
    return false;
  }
  return true;
}

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function isGeldigEmailAdres(email) {
  var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

// Email valideren
function valideerEmail() {
  var emailaddress = document.getElementById("inputMail").value;

  if (!isGeldigEmailAdres(emailaddress)) {
    console.log("email is fout");
    errorArray.push("Het veld email is verplicht.");
    return false;
  }
  return true;
}

// Postcode validatie
function checkPC(pc) {
  if (postcode == "") {
    errorArray.push("Het veld postcode is verplicht.");
    return false;
  }
  if (postcode.value < 1000 || postcode.value > 10000) {
    errorArray.push("De waarde van postcode moet tussen 1000 en 9999 liggen.");
    return false;
  }
  return true;
}

// Valideren formulier
function valideer(event) {
  var emailOk = valideerEmail();
  var voornaamOK = valideerVoornaam();
  var naamOK = valideerNaam();
  var gebruikerOK = valideerGebruikersnaam();
  var wachtwoordOK = valideerWachtwoord();
  var pcOK = checkPC();
  var errorbox = document.getElementById("errorAlert");
  var okbox = document.getElementById("okeAlert");
  var radioBtn = document.getElementsByName("customRadio");

  if (emailOk && voornaamOK && naamOK && gebruikerOK && wachtwoordOK && pcOK) {
    var rb = [].filter.call(radioBtn, function (e) {
      return e.checked;
    })[0];
    document.getElementById("betaling").innerHTML =
      "Je betalingswijze is " + rb.nextElementSibling.innerText;
    okbox.style.display = "block";
  } else {
    //https://stackoverflow.com/questions/36696472/how-to-output-a-javascript-array-to-html-links
    for (i = 0; i < errorArray.length; i++) {
      debugger;
      document.getElementById("foutmelding").innerHTML +=
        "<li>" + errorArray[i];
    }
    errorbox.style.display = "block";
    event.preventDefault();
  }
}
