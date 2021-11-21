const form = document.querySelector("#contact");
const yourName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const yourSubject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const yourAdress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const yourEmail = document.querySelector("#e-mail");
const emailError = document.querySelector("#emailError");

function validateForm() {
    event.preventDefault();
    console.log("hello");

    if (checkLength(yourName.value, 0) === true){
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (checkLength(yourSubject.value, 10) === true){
        subjectError.style.display = "none";
    } else {
       subjectError.style.display = "block";
    }

    if (checkLength(yourAdress.value, 25) === true){
       adressError.style.display = "none";
    } else {
       adressError.style.display = "block";
    }

    if (validateEmail(yourEmail.value) === true){
      emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}
form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
    
}

function validateEmail(yourEmail) { 
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(yourEmail);    
   return patternMatches;
 }

 function submitSucces(){
     if (validateForm() === true){
         form.innerHtml += `<p>Succes</p>`
     }
 }