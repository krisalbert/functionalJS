// Write a function with a closure. The first function should only take one argument, someone's first name, and the inner function should take one more argument, someone's last name. The inner function should console.log both the first name and the last name.

// var lastNameTrier = function(firstName){
//    //does stuff

//     var innerFunction = function() { 
//         //does stuff
//     };
//     //maybe returns something here
// };
// var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
// firstNameFarmer('Brown'); //logs 'Farmer Brown' 
// This function is useful in case you want to try on different last names. For example, I could use firstName again with another last name:

// firstNameFarmer('Jane'); //logs 'Farmer Jane'
// firstNameFarmer('Lynne'); //logs 'Farmer Lynne'

function names(firstName){
    return function(lastName){
        console.log(firstName, lastName);
    }
}

var Kris = names("Kris");
console.log(Kris);
Kris("Lee");
Kris("Shaisultanov");