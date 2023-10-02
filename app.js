let username = prompt("Please enter your name");

function getGender(gender) {
  while (gender !== "male" && gender !== "female") {
    gender = prompt("Please enter a valid gender (male or female)");
  }

  if (gender === "male") {
    alert(`Hello, Mr. ${username}`);
  } else if (gender === "female") {
    alert(`Hello, Ms. ${username}`);
  }
  window.gender = gender;
}

getGender(prompt("Please enter your gender"));

let typeOfDrink = prompt("Do you want to drink a hot or cold drink?");
let drinkName = prompt("What drink do you want?");
alert("Your drink is being prepared");
console.log(`Hello ${username}, your ${drinkName} is ready`);

let arrayInformation = [username, gender, typeOfDrink, drinkName];

for (let i = 0; i < arrayInformation.length; i++) {
  console.log(arrayInformation[i]);
}
