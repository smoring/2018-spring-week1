var bottles = 99


while(bottles >= 0) {
	console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer");

	if(bottles > 0) {
		console.log("Take one down, pass it around, " + (bottles - 1) + " bottles of beer on the wall.");
	} else {
		console.log("Go to the store and buy some more, 99 bottles of beer on th e wall.");
	}
	bottles--;
} 
