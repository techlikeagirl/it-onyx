$( "#CircleForm" ).validate({

});

function displayCircle() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        // clear out any old calculation
         document.getElementById("diameter").innerHTML = "";
         document.getElementById("circumference").innerHTML = "";
         document.getElementById("area").innerHTML = "";

         var radius; // string representation of the radius
         var radiusfp; // floating point value of radius
         
         var diameter;  // floating point diameter
         var circumference;  // floating point diameter
         var area;  // floating point diameter
         var result; // displayable result

         // read in the legs as a string
         radius = document.getElementById("radius").value;

        // Convert numbers from strings to Floating Point
         radiusfp = parseFloat( radius ); 
         // Convert numbers from strings to Floating Point
         circumferencefp = parseFloat( circumference ); 
         // Convert numbers from strings to Floating Point
         areafp = parseFloat( area ); 
        

         // calculate the diameter
         diameter = calcDiameter(radiusfp);
         // calculate the circumference
         circumference = calcCircumference(radiusfp);
         // calculate the area
         area = calcArea(radiusfp);

         // display the diameter
         document.getElementById("diameter").innerHTML = diameter.toString();
         // display the circumference
         document.getElementById("circumference").innerHTML = circumference.toString();
         // display the area
         document.getElementById("area").innerHTML = area.toString();
    }
}

  function calcDiameter (r)
  // returns the diameter
  // 2 times the radius
  {
      return 2 * r;
  }
  function calcCircumference (r)
  // returns the circumference
  // 2 times pi times Radius
  {
      return 2 * Math.PI*r;
  }
  function calcArea (r)
  // returns the diameter
  // pi times Radius times Radius
  {
      return Math.PI*r*r;
  }
  
  function clearForm()
{
    document.getElementById("leg1").value = "";
    document.getElementById("leg1error").innerHTML = "";
    document.getElementById("leg2").value = "";
    document.getElementById("leg2error").innerHTML = "";
    document.getElementById("hypotenuse").innerHTML = "";
}
