// function isWindy(){
//     alert("It is windy");
// };
// isWindy();
// isWindy();

// greetUser(firstName) {
//     alert(`Welcome ${name}!`);
// }

// function welcomeUser(temperature, name) {
// if (temperature) > 15) {
//     alert("It is a warm day" + name);
// } else {
//   alert("It is a cold day, " + name);
// }
// }

// welcomeUser(10,)


//Challange two

// function itsWindy(speed){
//    if(speed > 5){
//     alert("it is windy");
//    }
 
//  else {
//         alert("it is not windy");
// }
// }

// itsWindy(5);
// itsWindy(10);



 // Function to handle vacation planning
 function planVacation() {
    // Prompt the user for destination
    var destination = prompt("Where would you like to go on vacation?");
    
    // Prompt the user for trip duration
    var tripDuration = prompt("How long is your trip (in days)?");
    tripDuration = parseInt(tripDuration); // Convert input to integer
    
    // Prompt the user if they want to go on excursions
    var wantExcursions = confirm("Would you like to go on excursions?");
    
    // Display summary based on user inputs
    var summary = "Vacation Summary:\n\n";
    summary += "Destination: " + destination + "\n";
    summary += "Trip Duration: " + tripDuration + " days\n";
    summary += "Excursions: " + (wantExcursions ? "Yes" : "No") + "\n";
    
    alert(summary);
    
    // Additional logic based on user preferences
    if (tripDuration >= 7) {
      alert("That sounds like a nice long vacation!");
    } else {
      alert("Short and sweet! Enjoy your trip!");
    }
    
    if (wantExcursions) {
      alert("Don't forget to plan some exciting excursions!");
    } else {
      alert("Relaxing vacation ahead!");
    }
  }