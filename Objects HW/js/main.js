//------------ OBJECTS TASKS FROM JAVASCRIPT.INFO ------------

// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.
console.log("Task #1")
let user = {}

user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name

console.log(user) // cool cool

//-------------------------------------------
//-------------------------------------------

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

console.log("Task #2")

function isEmpty(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) //this is something I found on the web, seems unnecessarily complicated compared to their solution!
            return false;
    }
    return true;
}

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

// Their solution...
// function isEmpty(obj) {
//     for (let key in obj) {
//       // if the loop has started, there is a property
//       return false;
//     }
//     return true;
//   }

//-------------------------------------------
//-------------------------------------------

// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.
console.log("Task #3")
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
//let sum = salaries.reduce(s => z.sa) // I thought I was doing something here but I bailed out
function totalSalaries (obj) {
    let sum = 0
    for(let key in obj) {
        sum += obj[key]
    }
    return sum
}
console.log(totalSalaries(salaries))
// Geeze I wrung this solution from the depths of hell.

// Their solution... guess I overcomplicated it again!
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// alert(sum); // 390

//-------------------------------------------
//-------------------------------------------

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

console.log("Task #4")
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumberic(obj) {
    for(let key in obj) {
        console.log(typeof obj[key]) // just checking how this works!
        if(typeof obj[key] === "number") obj[key] *= 2
    }
}

multiplyNumberic(menu)
console.log(menu) //Worked!! FIRST TRYYYYYYY

//Their solution...same!
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }


