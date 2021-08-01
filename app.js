






//////////////////////MODULE 2  LESSONS         /////////////////////////////////////////////////////////////////////////


// function add() {
//     var sum = 1 + 5;
//     return sum;
// }

// console.log(add() );

// console.log( 'The sum is: ' + add() );

// function greet(name) {
//     console.log( 'Hi ' + name );
// }

// greet('Mr. Meow');
// greet('Godzilla');

// function hello(name) {
//     console.log('What is your ' + name);
// }

// greet('you are');

// hello('Thomas');

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(5,4) );

// console.log('The sum is ' + sum(2,3) );

//create the function and pass the 2 params
// create a variable result that gets product  
// then return the variable
// create var for bill
// var for tipPercent
// create a var for message for the bill amt & the tip amt
// send information to output

// function tip(bill, percent) {
//     var result = bill * (percent/100);
//     return result;
// }

// var myBill = document.getElementById('bill-amt');
// var tipPercent = document.getElementById('tip-percent');

// var message = 'The bill amt is ' + myBill 
// + 'and the tip amt is $' + tip(myBill, tipPercent);

// function finalResult() {
//     document.getElementById('output').innerHTML = message;
//     console.log('hello final')
// }



// function myFunction() {
//     document.getElementById('myForm').submit().innerHTML = message;
//     console.log('my')
// }







// function tip(bill, percent) {
//     var result = bill * (percent/100);
//     return result;
// }

// var myBill = 25;
// var tipPercent = 20;

// var message = "The bill is $" + myBill 
//     + " and the tip is $" + tip(myBill, tipPercent);

// document.getElementById('output').innerHTML = message;










// function sayStuff() {
//     var infoPro = "here it is";
//     console.log('hey 1st func')
//     document.getElementById('output').innerHTML = infoPro
// }

// sayStuff();

// function newStuff() {
//     var x = "there is more.";
//     console.log('this is 2nd func')
//     document.getElementById('input').innerHTML = x
// }

// newStuff();

// function myStuff() {
//     var y = "my new stuff";
//     console.log('hi');
//     document.getElementById('new-input').innerHTML = y;
// }

// myStuff();

// var message = sayStuff();

// document.getElementById('output').innerHTML = message;

////////  MODULE 2 EXERCISES ////////////////////////////////



//4. Write a function, showColor, that takes in a color parameter and shows this message in a div:

function showColor(color) {
    document.getElementById('whatever').innerHTML = color;
    console.log('Your shirt color is ' + color + ' .')
}

showColor('blue')


//5. 
//Type the following code, try it in the browser, retype it twice or until comfortable. Retype it four more times without looking at an example.

// function sum(a,b){
// 	return a+b;
// }

// console.log( "The sum is " + sum(4,6) );

//6. Write a function that multiplies three numbers and returns the result.  Display the result in 
// an HTML span.




/////////////MODULE 1 //////////////////////////

// document.getElementById('whatever').innerHTML = 'Yes I win.';

//Lessons

//1. create 2 divs and change the id. document.getElementById('whatever').innerHTML = 'hi';
//2. 20X -- document.getElementById('whatever').innerHTML = 'hi';
//3. Set the innerHTML of a div to have any HTML you want (not just plain text).


//////////////////////
// var x = 5;

// // these expressions all increase x by 1
// x = x+1;
// x += 1;
// x++;

// // these expressions all decrease x by 1
// x = x-1;
// x-=1;
// x--;

// // these expressions both add 5 to x
// x = x + 5;
// x += 5;

///////////////////////

// var x = 2;
// x += 4; // same as x = x+4;
// x -= 3; // same as x = x-3;
// x *= 10; // same as x = x*10;
// x /= 5; // same as x = x/5;
// x %= 3; // same as x = x%3;

////////////

// Exercises:

// 1.  Set two variables equal to 5 and 3. Show their sum in a div.
// 2.  Set a variable equal to 5. Increase it by 1 in three different ways. If you have trouble remembering any of the ways, type them five times.

// 3.  You have 11 pizza slices and 3 friends.
//     How many slices will each friend get? (No need to round since we haven’t covered rounding yet.
//     How many slices will be left over?
//     Display the results on a page in a format like this:
//     Slices for each friend: ___
//     Leftover slices: ___

// 4.  You’re at a restaurant and your bill is $10. You want to give a 20% tip.
//     Show the bill amount, the tip, and the total payment (bill and tip together).
//     Display your results something like this:

//     Bill: $__
//     Tip: $__
//     Total: $__
