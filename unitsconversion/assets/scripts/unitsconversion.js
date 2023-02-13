function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        var operand1 = document.getElementById("Operand1").value;

        // Operator
        // Get the value associated with the operator that was checked (+, -, *, or /)
        var operator;
        if (document.getElementById("centunit").checked) {
            operator = document.getElementById("centunit").value;
        }
        if (document.getElementById("meterunit").checked) {
            operator = document.getElementById("meterunit").value;
        }
        if (document.getElementById("kilounit").checked) {
            operator = document.getElementById("kilounit").value;
        }
        if (document.getElementById("inchunit").checked) {
            operator = document.getElementById("inchunit").value;
        }
        if (document.getElementById("feetunit").checked) {
            operator = document.getElementById("feetunit").value;
        }
        if (document.getElementById("yardunit").checked) {
            operator = document.getElementById("yardunit").value;
        }
        if (document.getElementById("mileunit").checked) {
            operator = document.getElementById("mileunit").value;
        }
        if (document.getElementById("centunit1").checked) {
            operator = document.getElementById("centunit").value;
        }
        if (document.getElementById("meterunit1").checked) {
            operator = document.getElementById("meterunit").value;
        }
        if (document.getElementById("kilounit1").checked) {
            operator = document.getElementById("kilounit").value;
        }
        if (document.getElementById("inchunit1").checked) {
            operator = document.getElementById("inchunit").value;
        }
        if (document.getElementById("feetunit1").checked) {
            operator = document.getElementById("feetunit").value;
        }
        if (document.getElementById("yardunit1").checked) {
            operator = document.getElementById("yardunit").value;
        }
        if (document.getElementById("mileunit1").checked) {
            operator = document.getElementById("mileunit").value;
        }
        CalculateResult(operand1, centunit, centunit1);
    }
}

async function CalculateResult(operand1, centunit, centunit1) {
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        /* AJAX calculator requires Operand1, Operator, and Operand2 */
        myURL = myURL + "?Operand1=" + encodeURIComponent(operand1) + "&centunit=" + encodeURIComponent(centunit) + "&centunit1=" + encodeURIComponent(centunit1);

        /* fetch the results */
        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand1Msg").innerHTML = "";
    document.getElementById("centunit").checked = false;
    document.getElementById("meterunit").checked = false;
    document.getElementById("kilounit").checked = false;
    document.getElementById("inchunit").checked = false;
    document.getElementById("feetunit").checked = false;
    document.getElementById("yardunit").checked = false;
    document.getElementById("mileunit").checked = false;
    document.getElementById("centunit1").checked = false;
    document.getElementById("meterunit1").checked = false;
    document.getElementById("kilounit1").checked = false;
    document.getElementById("inchunit1").checked = false;
    document.getElementById("feetunit1").checked = false;
    document.getElementById("yardunit1").checked = false;
    document.getElementById("mileunit1").checked = false;
    document.getElementById("Uniterror").innerHTML = "";
    document.getElementById("Unit1error").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});