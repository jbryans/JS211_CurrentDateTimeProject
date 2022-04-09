// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const convertNumberToString = (str) => {
  const result = Number(str)
  return result
  document.getElementById("button1").addEventListener("click", result)
}
console.log(convertNumberToString("5"))

// Write a JavaScript program to convert a string to the number.

const convertStringToNumber = (num) => {
  const result = String(num)
  return result
}
console.log(convertStringToNumber(5))


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean 
  

  // * Null
  
  // * Undefined

  // * Number

  // * NaN

  // * String

  function checkDataType(element) {
    return typeof element
  }
  console.log(checkDataType(true))

  
// Write a JavaScript program that adds 2 numbers together.
let x = 2
let y = 2
function add(){
  return x + y
}
console.log(add())
// const num1 = 2;
// const num2 = 2;
// const num3 = num1 + num2;
// console.log(num3)

// Write a JavaScript program that runs only when 2 things are true.

const q = 10;
const r = 15;
const s = 20;
function things() {
  if (q < r && r < s){
    return (true)
  }
  else {
    return (false)
  }
}
console.log(things())

// Write a JavaScript program that runs when 1 of 2 things are true.
function halfThings() {
  if (q < r && q > s){
    return true
  }
  else {
    return false
  }
}
 
console.log(halfThings())

// Write a JavaScript program that runs when both things are not true.  
function bothThings() {
  if (q > r && q > s){
    return true
  }
  else {
    return false
  }
}
 console.log(bothThings())

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

const numInput = document.getElementById("numToString")

const results = convertNumberToString(numToString.value)



const displayNumToStr = document.getElementById("display-numtostr").innerText = results



// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
