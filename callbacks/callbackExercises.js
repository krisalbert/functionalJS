var arr = "abcde".split("");
var obj = {
    name: "John Doe",
    age: 20,
    phone: "450-234-4233"
}

function funcCaller(arg, func){
    func(arg);
}

function firstVal(collection, func){
    if(Array.isArray(collection)){
        func(collection[0]);
        func(collection.indexOf(collection[0]));
        func(collection);
    }
    else{
        for(var key in collection){
            func(collection[key]);
            func(key);
            func(collection);
            break;
        }
    }
    
}

//funcCaller(arr, console.log);
firstVal(arr,console.log);
console.log("------------")
firstVal(obj,console.log);