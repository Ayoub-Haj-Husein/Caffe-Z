let personName = prompt("Please enter your name");
let personGender = prompt("Please enter your gender");

if (personGender === "male") {
  alert("Hello!" + " " + "Mr." + personName);
} else if (personGender === "female") {
  alert("Hello!" + " " + "Ms." + personName);
} else {
  alert("Hello!" + " " + personName);
}

let drinkStatus = prompt("Do you want to drink a hot or cold drink?");
let drinkName = prompt("What drink do you want?");
alert("Your drink is being prepared");
console.log(
  "Hello" + " " + personName + "," + "your" + " " + drinkName + " " + "is ready"
);
