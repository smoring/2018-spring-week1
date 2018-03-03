var name = "Susan";
var born = 1991
var year = 2018
var age = 26;

console.log("My name is " + name);
console.log("I am " + age + " years old");

if(age > 40) {
	console.log("Damn...you are OLD!!");
} else {
	console.log("Party on, you party animal");
}

var youngerThanMe = age - 1;

while(youngerThanMe > 0) {
	console.log("Someone age " + (age - youngerThanMe) + " is " + youngerThanMe + " younger than me.");
	youngerThanMe--;
}

