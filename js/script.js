//js content

// alert('hello');

// for (let i = 1; i<=10; i++) {
//     console.log(2 **i)
// }

// let i = 1;
// while (i<=10)
// {
//     console.log(2 **i);
//     i++;
// };


//                USING DO AND WHILE LOOPS TO GET AN INPUT FROM USER
// let input;
// do{
//     let input = prompt( "what is your name?");
//     //prompt always returns string
//     //convert input to number
//     console.log(Number(input));
//     }
//     while(!isNaN(Number(input)));
    
// alert("Hello " + input);
// alert('Hello ${input}');
//outputs user input as int

//               ADDING AND REMOVING FROM AN ARRAY  https://www.w3schools.com/jsref/jsref_obj_array.asp list of functions  

// let fruits=['Apple','Banana'];
// fruits.push("Orange");
// console.log(fruits);

// let popResult = fruits.pop();
// console.log(popResult);

// fruits.unshift("Mango");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

//              LOOPING IN AN ARRAY
// let fruits=['Apple', 'Banana'];
// for (let item of fruits){
//     console.log(item);
// }

//              OBJECTS IN JAVASCRIPT
const person = {
    name: ['Bob', 'Smith',],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing']
};

console.log(`my name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.interests[0]} and ${person.interests[1]};`)
