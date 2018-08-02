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

$(document).ready();

//Variables to store user input
$(document).on("click", "#input", function(event) {
    event.preventDefault();
    console.log("button works");
    var busName = $("#busName").val().trim();
    var destination = $("#destination").val().trim();
    var firstBus = $("#firstBus").val().trim();
    var frequency = $("#frequency").val().trim();
    
    console.log(busName);
    console.log(destination);
    console.log(firstBus);
    console.log(frequency);
})