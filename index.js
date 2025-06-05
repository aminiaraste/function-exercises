let age = 20;
age>18?true:confirm('Do you have your parents permission to access this page?');
////////////////////////////////////////////////////////////////////////////////////////
//example 2
let sum =1;
function power(n,x){
    for(let i=0; i<x;i++){
        sum = sum*n; 
    }
    console.log(sum);
}
power(4,2);
///////////////////////////////////////////////////////////////////////////////////
//example 3
const ask =(question, yes, no)=>confirm(question)? yes():no();
ask("Do you agree?",()=>"You agreed.",()=>"You canceled the execution.")
//////////////////////////////////////////////////////////////////////////////////
//example 4
let calculator = {
    value1:0 ,
    value2:0,
    read()  {this.value1=  Number(prompt('Please enter value1:'));
            this.value2= Number(prompt('Please enter value2:'));} ,
    sum() { return this.value1+this.value2 } ,
    mul(){return this.value1*this.value2  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
///////////////////////////////////////////////////////////////////////////////////////////
//example 5
const fun3 = (a,b) => {let min = a; a>b?console.log(min = b):console.log(min = a)};
fun3(12,5);
