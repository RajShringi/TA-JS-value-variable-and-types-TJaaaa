// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = Number(prompt(`Enter a number`));
if (num % 2 == 0) {
  alert("number is even");
} else {
  alert("number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
if (num1 > num2) {
  alert(`max value: ${num1}`);
} else if (num2 > num1) {
  alert(`max value: ${num2}`);
} else {
  alert("both value are same");
}

// 3. Convert the above code using`?` terniary operator

num1 > num2 ? alert(`max value: ${num1}`) : alert(`max value: ${num2}`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let house = prompt("Enter house name");
if (house === "stark") {
  alert("Winter is coming");
} else if (house === "lannister") {
  alert("A lannister always pays his debt");
} else {
  alert("All men must die");
}

// 5. Convert the above code using`?` terniary operator
house === "stark"
  ? alert("Winter is coming")
  : house === "lannister"
  ? alert("A lannister always pays his debt")
  : alert("All men must die");
// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = Number(prompt("Enter month number"));
switch (month) {
  case 2:
    alert("number of days 28 or 29");
    break;
  case 6:
  case 11:
  case 4:
  case 8:
    alert("number of days 30");
    break;
  default:
    alert("number of days 31");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salery = Number(prompt("Enter your salary"));
switch (true) {
  case salery <= 20000:
    alert(`Your salery is: ${salery - (10 * salery) / 100}`);
    break;
  case salery <= 40000:
    alert(`Your salery is: ${salery - (20 * salery) / 100}`);
    break;
  case salery <= 50000:
    alert(`Your salery is: ${salery - (30 * salery) / 100}`);
    break;
  default:
    alert(`can't calculate`);
}
//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt("Enter your marks"));
if (marks > 100) {
  alert(`Marks can't be greater than 100`);
} else if (marks >= 80 && marks <= 100) {
  alert(`Grade A`);
} else if (marks >= 50 && marks < 80) {
  alert(`Grade B`);
} else if (marks >= 30 && marks < 50) {
  alert(`Grade C`);
} else if (marks >= 0) {
  alert(`Grade D`);
} else {
  alert(`can't calculate`);
}

switch (true) {
  case marks > 100:
    alert(`Marks can't be greater than 100`);
    break;
  case marks >= 80 && marks <= 100:
    alert(`Grade A`);
    break;
  case marks >= 50 && marks < 80:
    alert(`Grade B`);
    break;
  case marks >= 30 && marks < 50:
    alert(`Grade C`);
    break;
  case marks >= 0:
    alert(`Grade D`);
    break;
  default:
    alert(`can't calculate`);
}
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weatherCondition = prompt(`What is the weather like outside?`);
switch (weatherCondition) {
  case "sunny":
    alert("Wear a T-shirt");
    break;
  case "rainy":
    alert(`Don't forget to take your raincoat`);
    break;
  case "hot":
    alert(`Get a hanky`);
    break;
  case "freezing":
    alert(`Get your sweeter on`);
    break;
  default:
    alert(`Not a valid input`);
}
