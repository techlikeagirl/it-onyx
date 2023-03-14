$( "#RoverForm").validate({

});

async function myfunction() {



// If all of the form elements are valid, the get the form values
    if ($( "#RoverForm" ).valid()) {
        
        var Curiosity = document.getElementById("Curiosity").value;
        var Opportunity = document.getElementById("Opportunity").value;
        var Spirit = document.getElementById("Spirit").value;


        if (document.getElementById("Curiosity").checked) {
            rover = document.getElementById("Curiosity").value;
        }
        if (document.getElementById("Opportunity").checked) {
            rover = document.getElementById("Opportunity").value;
        }
        if (document.getElementById("Spirit").checked) {
            rover = document.getElementById("Spirit").value;}

        var apikey = "DLJjcJtOr1e6cCq6bfWD3qFcUVbJPqpCeIm6vm0C"
        var PictureDate = document.getElementById("PictureDate").value;

        /* URL for AJAX Call */
        var myURL2 = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?earth_date=" + PictureDate + "&api_key=" + apikey;
        let PictureObject = await fetch(myURL2);
        let Result = await PictureObject.text();
        let msg = JSON.parse(Result);
        document.getElementById("numberofphotos").innerHTML = msg.photos.length;
        numberofphotos = msg.photos.length;
        if (numberofphotos > 25) {
            numberofphotos = 25
        }
        for (i = 0; i < numberofphotos; i++) {
            // Note how we construct the name for image1, image2, etc...this sets the image source
            document.getElementById("image" + i).src = msg.photos[i].img_src;
            document.getElementById("image" + i).title = msg.photos[i].camera.full_name;
            }
        }
        
     }  
function ClearForm() {
    document.getElementById("Curiosity").value = "";
    document.getElementById("Opportunity").value = "";
    document.getElementById("Spirit").value = "";
    document.getElementById("PictureDate").value = "";
    document.getElementById("numberofphotos").innerHTML = "";
}