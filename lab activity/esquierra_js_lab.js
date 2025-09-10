//Act 1: Variables and Functions 
let name = "Ailen";
let age = 30;

function greetUser(name, age) {
  return `Hello, I am ${name} and I am ${age} years old.`;
}

// Display greeting on the webpage
document.getElementById("greeting").textContent = greetUser(name, age);

// Also log greeting to console for debugging
console.log(greetUser(name, age));


// Act 2 & 3: DOM Manipulation + Debugging
const button = document.getElementById("colorBtn");
const colorText = document.getElementById("colorText");

// this line is the function to generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//this line is the event listener for the button
button.addEventListener("click", () => {
  // console log before changing
  console.log("please wait while we change the background color");

  let newColor = getRandomColor();
  console.log(`generated color: ${newColor}`);

  // this line will change the background color
  document.body.style.backgroundColor = newColor;
  colorText.textContent = `the color of the background is: ${newColor}`;

   // console log after changing
  console.log(`The new background is ${newColor}! `);
});
