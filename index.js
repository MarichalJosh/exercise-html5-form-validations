
const form = document.getElementById("form");
const numbercard = document.getElementById("cardnumber");
const cvcnumb = document.getElementById("cvcnum");
const amount = document.getElementById("amnt");
const firstna = document.getElementById("firstnm");
const lanam = document.getElementById("lastname");
const cit = document.getElementById("ciudad");
const selprov = document.getElementById("prov");
const codepost = document.getElementById("postcode");
const errorcard = document.getElementById("smallcard")
const errorcvc = document.getElementById("smallcvc")
const erroramount = document.getElementById("smallamnt")
const errorfn = document.getElementById("smallfn")
const errorln = document.getElementById("smallln")
const errorcity = document.getElementById("smallcity")
const errorpost = document.getElementById("smallcode")


form.addEventListener('submit',function(e) {
    e.preventDefault();
    if (numbercard.value.length > 16 || numbercard.value.length <= 0) {
            errorcard.innerHTML = "Please enter a valid Credit Card Number containing 16 digits";
            numbercard.style.backgroundColor = "#e74c3c";
        }
    if (cvcnumb.value.length > 3 || cvcnumb.value.length <= 0) {
            errorcvc.innerHTML = "Invalid CVC#";
            cvcnumb.style.backgroundColor = "#e74c3c";
        }
    if (amount.value.length <= 0) {            
            amount.style.backgroundColor = "#e74c3c";
        }
    if (firstna.value.length <= "") {
            errorfn.innerHTML = "Please enter a name";        
            firstna.style.backgroundColor = "#e74c3c";
        }
    if (lanam.value.length <= "") {
            errorln.innerHTML = "Please enter a last name";        
            lanam.style.backgroundColor = "#e74c3c";
        }
    if (codepost.value.length > 5 ||codepost.value.length <= 0) {
            errorpost.innerHTML = "Please enter a valid postal code";        
            codepost.style.backgroundColor = "#e74c3c";
        }
    if (cit.value.length <= "") {
            errorcity.innerHTML = "Please enter a city";        
            cit.style.backgroundColor = "#e74c3c";
        }
    else{
        alert("Form was completed successfully")
        form.reset();
        numbercard.style.backgroundColor = "white"
        cvcnumb.style.backgroundColor = "white"
        amount.style.backgroundColor = "white"
        firstna.style.backgroundColor = "white"
        lanam.style.backgroundColor = "white"
        codepost.style.backgroundColor = "white"
        cit.style.backgroundColor = "white"
    }
    
});

