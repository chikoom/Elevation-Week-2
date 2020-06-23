// // Learn Exercises
// exDivider('- Learn Exercises');

// let users = []

// const getData = function (displayData) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         displayData()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }


// getData(displayData)

// // setInterval(function(){
// //   console.log(new Date())
// // }, 1000)



// const square = number => number**2

// console.log(square(4))


// const getFormalTitle = (title, name) => `${title} ${name}`
// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"


// Exercise 1
exDivider('1');


const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

const pushPull = func => func()

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"


// Exercise 2
exDivider('2');

const returnTime = function (time) {
  console.log('The current time is: ' + time)
}

const getTime = () => returnTime(new Date())

getTime(returnTime)


// Exercise 3
exDivider('3');


const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

const logData = data => console.log(data)

displayData(alert, logData, "I like to party")


// Exercise 4
exDivider('4');

const sumOfThree = (num1, num2, num3) => num1+num2+num3
console.log(sumOfThree(1,2,3))


// Exercise 5
exDivider('5');

const capitalize = string => string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)

console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia



// Exercise 6
exDivider('6');

const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}

const commentOnWeather = temp => `It's ${determineWeather(temp)}`


console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"


// Exercise 7
exDivider('7');


const explode = (lightFunc, soundFunc, sound) => {
  lightFunc()
  soundFunc(sound)
}

const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
const makeSound = (sound) => alert(sound)

explode(shineLight, makeSound, "BOOM")



function exDivider(number) {
  console.log(" ");
  console.log(" ");
  console.log("==========================");
  console.log("Exercise " + number);
  console.log("==========================");
  console.log(" ");
}
