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

let input;
do{
    let input = prompt( "what is your name?");
    //prompt always returns string
    //convert input to number
    console.log(Number(input));
    }
    while(!isNaN(Number(input)));
    
alert("Hello " + input);
alert('Hello ${input}');
    //outputs user input as int