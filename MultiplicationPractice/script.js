var form=document.getElementById('form');
var score=document.getElementById('score');
var Question=document.getElementById('Question');
var answer=document.getElementById('answer');
var submit=document.getElementById('submit');

var num1=Math.floor(Math.random()*10);
var num2=Math.floor(Math.random()*10);

var num1num2=num1*num2;
Question.innerText=`what is ${num1} multiplied by ${num2}?`;
let updatescore=JSON.parse(localStorage.getItem("newvariable"));
if(updatescore==null){
    updatescore=0;
}
console.log(updatescore);
score.innerText=`score:${updatescore}`;
form.addEventListener("submit",()=>{
    var Userans=+answer.value;
    if(Userans===num1num2){
        updatescore++;
        updateLocalStorage();
    }
    else{
        updatescore--;
        updateLocalStorage();
    }

});

function updateLocalStorage(){
   localStorage.setItem("newvariable",JSON.stringify(updatescore));
   
}