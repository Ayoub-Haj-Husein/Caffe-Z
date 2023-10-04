// let username = prompt("Please enter your name");

// function getGender(gender) {
//   while (gender !== "male" && gender !== "female") {
//     gender = prompt("Please enter a valid gender (male or female)");
//   }

//   if (gender === "male") {
//     alert(`Hello, Mr. ${username}`);
//   } else if (gender === "female") {
//     alert(`Hello, Ms. ${username}`);
//   }
//   window.gender = gender;
// }

// getGender(prompt("Please enter your gender"));

// let typeOfDrink = prompt("Do you want to drink a hot or cold drink?");
// let drinkName = prompt("What drink do you want?");
// alert("Your drink is being prepared");
// console.log(`Hello ${username}, your ${drinkName} is ready`);

// let arrayInformation = [username, gender, typeOfDrink, drinkName];

// for (let i = 0; i < arrayInformation.length; i++) {
//   console.log(arrayInformation[i]);
// }

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userInfo");
  const container = document.getElementById("container");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const drinkType = document.getElementById("drinkType").value;
    const drinkName = document.getElementById("drinkName").value;

    const userDataDiv = document.createElement("div");

    const userUl = document.createElement("ul");

    const nameLi = document.createElement("li");
    nameLi.textContent = `Name: ${name}`;

    const genderLi = document.createElement("li");
    genderLi.textContent = `Gender: ${gender}`;

    const drinkTypeLi = document.createElement("li");
    drinkTypeLi.textContent = `Type Drink: ${drinkType}`;

    const drinkNameLi = document.createElement("li");
    drinkNameLi.textContent = `Drink Name: ${drinkName}`;

    userUl.appendChild(nameLi);
    userUl.appendChild(genderLi);
    userUl.appendChild(drinkTypeLi);
    userUl.appendChild(drinkNameLi);

    userDataDiv.appendChild(userUl);

    form.reset();

    container.appendChild(userDataDiv);
  });
});
