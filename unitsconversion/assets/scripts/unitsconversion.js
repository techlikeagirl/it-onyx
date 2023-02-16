function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        var FromValue = document.getElementById("FromValue").value;

        // Units
        // Get the units associated with the operator that was checked
        var FromUnit;
        if (document.getElementById("fromcentimeters").checked) {
            FromUnit = document.getElementById("fromcentimeters").value;
        }
        if (document.getElementById("frommeters").checked) {
            FromUnit = document.getElementById("frommeters").value;
        }
        if (document.getElementById("fromkilometers").checked) {
            FromUnit = document.getElementById("fromkilometers").value;
        }
        if (document.getElementById("frominches").checked) {
            FromUnit = document.getElementById("frominches").value;
        }
        if (document.getElementById("fromfeet").checked) {
            FromUnit = document.getElementById("fromfeet").value;
        }
        if (document.getElementById("fromyards").checked) {
            FromUnit = document.getElementById("fromyards").value;
        }
        if (document.getElementById("frommiles").checked) {
            FromUnit = document.getElementById("frommiles").value;
        }
        // Get the units associated with the operator that was checked
        var ToUnit;
        if (document.getElementById("tocentimeters").checked) {
            ToUnit = document.getElementById("tocentimeters").value;
        }
        if (document.getElementById("tometers").checked) {
            ToUnit = document.getElementById("tometers").value;
        }
        if (document.getElementById("tokilometers").checked) {
            ToUnit = document.getElementById("tokilometers").value;
        }
        if (document.getElementById("toinches").checked) {
            ToUnit = document.getElementById("toinches").value;
        }
        if (document.getElementById("tofeet").checked) {
            ToUnit = document.getElementById("tofeet").value;
        }
        if (document.getElementById("toyards").checked) {
            ToUnit = document.getElementById("toyards").value;
        }
        if (document.getElementById("tomiles").checked) {
            ToUnit = document.getElementById("tomiles").value;
        }
        CalculateResult(FromValue, FromUnit, ToUnit);
    }
}

async function CalculateResult(FromValue, FromUnit, ToUnit) {
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        /* AJAX calculator requires FromValue, FromUnit, and ToUnit */
        myURL = myURL + "?FromValue=" + encodeURIComponent(FromValue) + "&FromUnit=" + encodeURIComponent(FromUnit) + "&ToUnit=" + encodeURIComponent(ToUnit);

        /* fetch the results */
        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueMsg").innerHTML = "";
    document.getElementById("frommeters").checked = false;
    document.getElementById("fromcentimeters").checked = false;
    document.getElementById("fromkilometers").checked = false;
    document.getElementById("frominches").checked = false;
    document.getElementById("fromfeet").checked = false;
    document.getElementById("fromyards").checked = false;
    document.getElementById("frommiles").checked = false;
    document.getElementById("tocentimeters").checked = false;
    document.getElementById("tometers").checked = false;
    document.getElementById("tokilometers").checked = false;
    document.getElementById("toinches").checked = false;
    document.getElementById("tofeet").checked = false;
    document.getElementById("toyards").checked = false;
    document.getElementById("tomiles").checked = false;
    document.getElementById("FromUniterror").innerHTML = "";
    document.getElementById("ToUniterror").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});