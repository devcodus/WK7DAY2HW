
//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function myFavoriteFood(person) {
    console.log(`my favorite pizza is ${person.pizza[0]} and ${person3.pizza[1]}`)
    console.log(`my favorite tacos is ${person.tacos}`)
    console.log(`my favorite burger is from ${person.burgers}`)
    console.log(`my favorite ice cream includes ${person3.ice_cream[0]}, ${person3.ice_cream[1]}, and ${person3.ice_cream[2]}`)
    console.log(`my favorite shakes include ${person3.shakes[0].oberwise} from Oberwise`);
    console.log(`my favorite shakes include ${person3.shakes[0].dunkin} from Dunkin`);
    console.log(`my favorite shakes include ${person3.shakes[0].culvers} from Culvers`)
    console.log(`my favorite shakes include ${person3.shakes[0].mcDonalds} from McDonalds`)
    console.log(`my favorite shakes include ${person3.shakes[0].cupids_candies} from Cupids Candies`)
}

myFavoriteFood(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// Write an object prototype for a Person that has a name and age, a printInfo method, and an increment age method each time the method is called. Create two people using the 'new' keyword, and print both of their info's and increment one person's age by 3 years. Use an arrow functino for both methods.

//how to write a JS arrow function
// how to write an object prototype

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.printInfo = () => {
    return this.name + ', ' +this.age + ' years old'
}

Person.prototype.incrementAge = () => {
    return this.age += 1
}

var David = new Person('David', 30);
console.log(David.printInfo());
console.log(David.incrementAge());
console.log(David.incrementAge());
console.log(David.incrementAge());


var Eric = new Person('Eric', 22);
console.log(Eric.printInfo());




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


function checkString(str){
    return new Promise((resolve, reject) => {
        if (str.length > 10){
            resolve('Big word');
        } else {
            reject("Small Number")
        }
    });
}

checkString("Hello Coding Temple!")
.then(result => {
    console.log(result);
})
.catch(error => {
    console.error(error);
});

checkString("Heythere")
.then(result => {
    console.log(result);
})
.catch(error => {
    console.error(error);
})