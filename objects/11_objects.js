//object literals 


const mySym = Symbol("key1")

const JsUser = {
    name:"Ajitesh",
    "surname": "Shukla",
    [mySym]: "key1",//this is the way you declare a Symbol  
                      //this is the correct syntax
                      //[] this bracket tells in symbol key in output
                      // if you remove that it will still work 
    age: 19,
    location: "Lucknow",
    email: "ajiteshshukla@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Tuesday","Saturday"]
}
console.log(JsUser.email)//this is not completely right way 
console.log(JsUser["email"])
console.log(JsUser["surname"])
//console.log(JsUser[surname])//this will show error in while printing surname
                            //so the [] brackets way is totally right

console.log(JsUser[mySym])


JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log('hello JS user, ${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo);

Object.freeze(JsUser)//this will freeze or lock the value for JsUserf
JsUser.email = "ajiteshshukla@outlook.com"
console.log(JsUser["email"])
