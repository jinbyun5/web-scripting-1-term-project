// Leaflet JS
// Initialize the map and set its view to the specific location and a zoom level
// A zoom level is now 13. The higher number, the closer the map view
// I got the location info of Queen Elizabeth park from Google Map
var map = L.map('map').setView([49.24211770293008, -123.11270513395074], 13);

// Add a tile layer to the map, using a OpenStreetMap tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a marker on the map
var marker = L.marker([49.24211770293008, -123.11270513395074]).addTo(map);

// Adding a circle, indicating the specific the radius in meters
var circle = L.circle([49.24211770293008, -123.11270513395074], {
    color: '#FFD700',
    fillColor: 'red',
    fillOpacity: 0.3,
    radius: 1000
}).addTo(map);

// Add popups to attach some info to a particular object on a map
marker.bindPopup("<b>Hello Hello!</b><br>You might spot me here…🤩").openPopup();
circle.bindPopup("<b>‼️ Warning ‼️</b><br>Frequent appearances detected.");

// Add more info using popups as layers
// It handles automatic closing of a previously opened popup when opening a new one which is good for usability.
var popup = L.popup()
    .setLatLng([49.250095365228724, -123.08990805214307])
    .setContent("My favorite ice cream place🍦")
    .openOn(map);

// When clicking anywhere on the map, the alert message showing the coordinates shows up
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

// Event Handler calling onMapClick function
map.on('click', onMapClick);


// jQuery Validation
// When clicking the 'Send Message' button, this will check if all input field are valid
$(document).ready(function() {
    // Implement validation of the contact-form
    $("#contact-form").validate({
        rules: {
            // Name is required field and must be at least 2 characters
            name: {
                required: true,
                minlength: 2
            },
            // Email is required field and must be the form of email (e.g. abc@gmail.ca)
            email: {
                required: true,
                email: true
            },
            // Subject is required field and must be at least 2 characters
            subject: {
                required: true,
                minlength: 2
            },
            // Message is required field and must be at least 5 characters
            message: {
                required: true,
                minlength: 5
            }
        },
        // If the required field is empty, these messages will be displayed
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Please enter at least 2 characters"
            },
            email: {
                required: "Please enter your email",
                minlength: "Please enter a valid email address",
            },
            subject: {
                required: "Please enter the subject",
                minlength: "Please enter at least 2 characters"
            },
            message: {
                required: "Please write your message",
                minlength: "Please enter at least 5 characters"
            }
        },
        // The error message will be created with <em> tag
        errorElement: "em",
        // If all the requirements are satisfied, now I can submit the form.
        // If it is complete, alert pop up message will be displayed
        submitHandler: function(form) {
            alert("Thank you for reaching out! I’ll get back to you soon.");
            form.submit();
        }
    });
});