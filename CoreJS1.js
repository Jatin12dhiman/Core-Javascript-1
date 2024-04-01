//Q1
var marks= 91;
let grade;

if(marks>90)
{
    grade='A';
}
else if(marks>=70 && marks<=90)
{
    grade ='B';
}
else if(marks >=50 && marks <=70 )
{
    garde = 'C';
}
else {
    grade ='F';
}
console.log(`Your Grade is ${grade}`)
// Q2;
const num1 = 10;
const num2 = 25;
for ( let i=num1+1 ; i<= num2; i++)
{
    console.log(i);
}
//  Q3
const number=-20;
number>0 ? console.log('Positive'):number<0 ? console.log('Negative'):console.log('Zero');
// Q4 
/** Comma operator allows us to evaluate multiple expressions in a single statement like declaring multiple 
variables in a single statement separating them with the comma operator.**/
const a=5,b=7,c=9;
console.log(a,b,c);

//Q 5;
let username="admin";
let password="12345";
 
if(username==="admin"&& password==="12345")
{
    console.log("Login Successfully");
}
else
{
    console.log("Invalid Credential");
}
// Q 6;
 let paymentMethod="debit";
 switch(paymentMethod)
 {
    case"credit":
    console.log("Processing fee for credit payment :2% ");
    break;
    case"debit":
    console.log("Processing fee for credit payment :1.5% ");
    break;
    case"paypal":
    console.log("Processing fee for credit payment :3% ");
    break;
    default:
        console.log("Invalid Payment method");
 }

 // Q 7 
 let currentTemperature=34;
  let weatherCondition =currentTemperature>30?'Hot':'Moderate';
  console.log(`weather Condition is :${weatherCondition}`)

  //Q8
  let thatNumber=5;

  let sum=0;
  let currentNumber=1;
  
  do{
    sum=sum+currentNumber;
    currentNumber=currentNumber+1;
  }
  while(currentNumber<=thatNumber)
  console.log(`sum from 1 to ${thatNumber} is : ${sum}`);