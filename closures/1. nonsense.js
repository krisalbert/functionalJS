// Write a function, nonsense that takes an input string. This function contains another function, blab which alerts string and is immediately called inside the function nonsense. blab should look like this inside of the nonsense function:

//  var blab = function(){
//    alert(string);
//  };
// In your function, nonsense, change the immediate call to a setTimeout so that the call to blab comes after 2 seconds. The blab function itself should stay the same as before.

// Now, instead of calling blab inside of nonsense, return blab (without invoking it). Call nonsense with some string and store the returned value (the blab function) in a variable called blabLater. Call nonsense again with a different string and store the returned value in a variable called blabAgainLater.

// Inspect blabLater and blabAgainLater in your console. Call them (they are functions!) and see what happens!

function nonsense(string){
	var blab = function(){
		console.log("hi "+string );
	}
   return blab;
}

nonsense("Kris");

blablater = nonsense("Kris");

//blablater();