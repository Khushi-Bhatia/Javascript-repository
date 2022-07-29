var hour=document.getElementById('hour');
var minutes=document.getElementById('minutes');
var seconds=document.getElementById('seconds');
var ampm=document.getElementById('ampm');

function callClock(){
var d=new Date();
hour.innerText=d.getHours();
minutes.innerText=d.getMinutes();
seconds.innerText=d.getSeconds();
if(hour.innerText>12)
{
    hour.innerText=hour.innerText-12;
    ampm.innerText="PM";

}
setTimeout( ()=>{
    callClock()
},
1000
)
}
callClock();