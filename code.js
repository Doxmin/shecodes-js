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



 
//  function planVacation() {
  
//     var destination = prompt("Where would you like to go on vacation?");
    
   
//     var tripDuration = prompt("How long is your trip (in days)?");
//     tripDuration = parseInt(tripDuration); 
   
//     var wantExcursions = confirm("Would you like to go on excursions?");
    
    
//     var summary = "Vacation Summary:\n\n";
//     summary += "Destination: " + destination + "\n";
//     summary += "Trip Duration: " + tripDuration + " days\n";
//     summary += "Excursions: " + (wantExcursions ? "Yes" : "No") + "\n";
    
//     alert(summary);
    
   
//     if (tripDuration >= 7) {
//       alert("That sounds like a nice long vacation!");
//     } else {
//       alert("Short and sweet! Enjoy your trip!");
//     }
    
//     if (wantExcursions) {
//       alert("Don't forget to plan some exciting excursions!");
//     } else {
//       alert("Relaxing vacation ahead!");
//     }
//   }


  // function isCold(temperature) {
  //   return temperature <= 10;
  // }

  // let temperature = prompt("What temperature is it today?");

  // if (isCold(temperature)) {
  //   alert("it is cold today");
  // } else {
  //   alert("it is warm today");
  // }



//   function isWindy(speed, unit) {
//     if (speed > 5 && unit === "metric") {
//       return true;
//     } else {
//       return false;
//     }
//   }





// let speed = prompt("What is the wind speed?");
// let unit = prompt("In what unit? (metric or imperial?")

// if (isWindy(speed)) {
//   alert("It is windy");
// } else {
//   alert("It is not windy");
// }




let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let day = now.getDay();
let milliseconds = now.getMilliseconds();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.getMonth()];

// console.log("Date:", now);
// console.log("Milliseconds:", milliseconds);
// console.log("Day:", days[day]);
// console.log("Year:", year);
// console.log("Month:", month);
// console.log("Hours:", hours);
// console.log("Minutes:", minutes);

function formatDate(date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();
  
  return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
}


console.log(formatDate(new Date()));
