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

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function StringMethods(){
    //String Methods
    document.getElementById("demo1").innerHTML=text.length;
    document.getElementById("demo1").innerHTML=text.slice(7);
    document.getElementById("demo1").innerHTML=text.replace("ABCD","SHAN");
    document.getElementById("demo1").innerHTML=text.toUpperCase;
    document.getElementById("demo1").innerHTML=text.toLowerCase;
    
}

//String search methods
let tewxt = "Please locate where 'locate' occurs";
let index = text.lastIndexOf("where");

console.log(index);

//1.search() ->regular expressions
//2.index() ->Not suitable for greater Values
//3.lastindexof()
//

let firstName="Ricky";
let lastName = "Johnson";

let text_result = 'Welcome onboard ${firstName}, ${lastName}';
document.getElementById("demo2").innerHTML = text_result;

console.log(text_result);

/*With BigInt the total number of supported data types in JavaScript is 8:

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object
*/