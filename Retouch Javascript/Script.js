function mycustomfunction(){
    document.getElementById("demo").innerHTML="Hi Shankara";
}
function mycustomfunction1(){
    document.getElementById("add").innerHTML=5+6;
}
document.write(5+6);
window.alert("This is a testing site");
alert("Ignore the previous pop-up and consider improvising the learning streaks daily")

console.log("Almost started with javascript by touching the base concepts");


//javascript print/


/*this print()method is used to print objects and methos and we can use alt text in any of the html property
window.print(name);
*/


//Statements
let a,b,sum,sub,mul,div;
a=6;
b=10;

sum=a&b;
sub=a%b;
mul=a>>b;
div=a<<b;

function myfunction(){
    document.getElementById("demo").innerHTML="The solution for all the operators are 1.add:" + sum +"2.Sub"+sub+"3.Mul"+mul+"4.Div"+div;
}

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

let number= 16+"Volvo";
let number1= "16"+"VOlvo";

function StringCheck(){
    document.getElementById("namecheck").innerHTML=number;
    document.getElementById("namecheck").innerHTML=number1;
}