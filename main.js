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

        //Clear the input boxes
        $("#busName").val("");
        $("#destination").val("");
        $("#firstBus").val("");
        $("#frequency").val("");
    })

    //Use the data from firebase to populate the table
    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().destination);
        console.log(childSnapshot.val().firstBus);
        console.log(childSnapshot.val().frequency);
        
        //Make variables based on the data in firebase
        var busName = childSnapshot.val().name;
        var busDestination = childSnapshot.val().destination;
        var firstTime = childSnapshot.val().firstBus;
        var busFrequency = childSnapshot.val().frequency;

        console.log(busName);
        console.log(busDestination);
        console.log(firstTime);
        console.log(busFrequency);
        //find the next arrival time for the bus


        //find out how many minutes away the next bus is

        //Add a row and populate the table
        var newRow = $("<tr>").append(
            $("<td>").text(busName),
            $("<td>").text(busDestination),
            $("<td>").text(firstTime),
            $("<td>").text(busFrequency),
            $("<td>").text(busName),
        );

        //Append the new row to the table
        $("#bus-table > tbody").append(newRow);
    })

})