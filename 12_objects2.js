//const tinderUser = new Object() //this is a singleton object
const tinderUser = {}

tinderUser.id = "234agg"
tinderUser.name = "Samay"


console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname :"ajtesh",
            lastname :"shukla"
        }
    }
}

console.log(regularUser.fullname.userfullname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}



// const obj3 = {obj1,obj2}  //seperate objectwise 


// const obj3 = Object.assign({},obj1,obj2)'

const obj3 = {...obj1,...obj2}//this is easy to seperate two objects
console.log(obj3)


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

