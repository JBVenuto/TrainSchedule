//Initialize Firebase
var config = {
    apiKey: "AIzaSyATM3rEdNuJAxuSXfW_QnRdmtgSVqjKyGE",
    authDomain: "train-schedule-da3eb.firebaseapp.com",
    databaseURL: "https://train-schedule-da3eb.firebaseio.com",
    projectId: "train-schedule-da3eb",
    storageBucket: "train-schedule-da3eb.appspot.com",
    messagingSenderId: "909853333161"
};

firebase.initializeApp(config);

//Create a variable that store the firebase data
var database = firebase.database();

$(document).ready(function() {

    //Variables to store user input
    $(document).on("click", "#input", function(event) {
        event.preventDefault();
        //check if the button works
        console.log("button works");
        //Variables to store the input to
        var busName = $("#busName").val().trim();
        var busDestination = $("#destination").val().trim();
        var firstTime = $("#firstBus").val().trim();
        var busFrequency = $("#frequency").val().trim();

        //Put the user input into an object
        var newBus = {
            name: busName,
            destination: busDestination,
            firstBus: firstTime,
            frequency: busFrequency
        }

        //Push the new bus object to firebase
        database.ref().push(newBus);

        //Console log the object values
        console.log(newBus.name);
        console.log(newBus.destination);
        console.log(newBus.firstBus);
        console.log(newBus.frequency);
    })

})