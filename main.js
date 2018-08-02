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

  //Create a variable that holds the firebase data
  var database = firebase.database();