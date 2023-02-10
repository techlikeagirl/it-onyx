function calculate() {
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        /* get the operands from the form */
        var operand1 = document.getElementById("Operand1").value;
        var operand2 = document.getElementById("Operand2").value;
        
        /* convert the operands from string to floating point */
        var operand1fp = parseFloat (operand1);
        var operand2fp = parseFloat (operand2);
        
        /* figure out which operator was checked and place the value in operator */
        var operator;
        if (document.getElementById("AddOperator").checked) {
            operator = document.getElementById("AddOperator").value;
        }
        if (document.getElementById("SubtractOperator").checked) {
            operator = document.getElementById("SubtractOperator").value;
        }
        if (document.getElementById("MultiplyOperator").checked) {
            operator = document.getElementById("MultiplyOperator").value;
        }
        if (document.getElementById("DivideOperator").checked) {
            operator = document.getElementById("DivideOperator").value;
        }

        var result;
        
        /* if the operator was "AddOperator" then add the numbers */
        if (operator == "AddOperator") {
            result = operand1fp + operand2fp;
            }
        /* if the operator was "SubtractOperator" then subtract the numbers */
        if (operator == "SubtractOperator") {
            result = operand1fp - operand2fp;
        }
        /* if the operator was "MultiplyOperator" then multiply the numbers */
        if (operator == "MultiplyOperator") {
            result = operand1fp * operand2fp;
        }
        /* if the operator was "DivideOperator" then divide the numbers */
        if (operator == "DivideOperator") {
            result = operand1fp / operand2fp;
        }
        /* convert the result to a string and display it */
        document.getElementById("Result").innerHTML = result.toString();
        }
}

function clearform() {
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("AddOperator").checked = false;
    document.getElementById("SubtractOperator").checked = false;
    document.getElementById("MultiplyOperator").checked = false;
    document.getElementById("DivideOperator").checked = false;
    document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({
 
});