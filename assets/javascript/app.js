 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDeTOxKM6oyM9CSfqMOuELaI-RJcHuFIEI",
    authDomain: "trainschedule-d4500.firebaseapp.com",
    databaseURL: "https://trainschedule-d4500.firebaseio.com",
    projectId: "trainschedule-d4500",
    storageBucket: "trainschedule-d4500.appspot.com",
    messagingSenderId: "697495092427"
  };
  
  firebase.initializeApp(config);

  var database = firebase.database();
  // var trainName = "";
  // var destination = "";
  // var firstTrainTime = "";
  // var frequency = "";


  // database.ref().set({
		//     trainName: trainName,
		//     destination: destination,
		//     firstTrainTime: firstTrainTime,
		//     frequency: frequency
		// });


$(document).ready(function (){

	



});

$("#newTrain").on("click", function(e){
		e.preventDefault();
		trainName = $("#name"). val().trim();
		destination = $("#destination").val().trim();
		firstTrainTime = $("#firstTrain").val().trim();
		frequency = $("#frequency").val().trim();

		//Each time a new value is added that is the "child_added" event
		database.ref().push( {
		    trainName: trainName,
		    destination: destination,
		    firstTrainTime: firstTrainTime,
		    frequency: frequency
		});

	});

			//Firebase watcher
		database.ref().on("child_added", function(snapshot) {

			console.log(snapshot.val());  //logs everything

			var name = snapshot.val().trainName;
			var to = snapshot.val().destination;
			var first = snapshot.val().firstTrainTime;
			var interval = snapshot.val().frequency;
		
			//add row data 

			var tableRow = $("<tr>");
			var tableData = $("<td>");

			tableData.append(name);
			tableRow.append(tableData);
			var tableData = $("<td>");
			tableData.append(to);
			tableRow.append(tableData);
			var tableData = $("<td>");
			tableData.append(interval);
			tableRow.append(tableData);
			// var tableData = $("<td>");
			// tableData.append(moment(monthsWorked).format("MM")-1);
			// tableRow.append(tableData);
			// var tableData = $("<td>");
			// tableData.append(monthlyRate);
			// tableRow.append(tableData);


			$("tbody").append(tableRow);

		});
