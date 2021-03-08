
let check1 = document.querySelector("invalidCheck1");
let check2 = document.querySelector("invalidCheck2");
let check3 = document.querySelector("invalidCheck3");
let check4 = document.querySelector("invalidCheck4");
let canbutton = document.querySelector("button1");
let sendbutton = document.querySelector("button2");
var numbercard = document.getElementById("cardnumber");
var cvcnumb = document.getElementById("cvcnum");
var amount = document.getElementById("amnt");
var firstna = document.getElementById("firstnm");
var lanam = document.getElementById("lastname");
var cit = document.getElementById("ciudad");
var selprov = document.getElementById("prov")
var codepost = document.getElementById("postcode")

function validate(){    
    

    if(numbercard.value=="" ||cvcnumb.value==""||amount.value==""||firstna.value==""||lanam.value==""
    ||cit.value==""||selprov.value==""||codepost.value=="")
    {
        alert("No blank values allowed");
        return false;
    }
    else{
        true;
    }
}

//document.addEventListener("DOMContentLoaded", function() {
   // var elements = document.getElementsByTagName("INPUT");
    //for (var i = 0; i < elements.length; i++) {
       // elements[i].oninvalid = function(e) {
         //   e.target.setCustomValidity("");
           // if (!e.target.validity.valid) {
             //   e.target.setCustomValidity("This field cannot be left blank");
           // }
        //};
        //elements[i].oninput = function(e) {
            //e.target.setCustomValidity("");
        //};
    //}
//})
