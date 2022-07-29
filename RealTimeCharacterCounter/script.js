var textarea=document.getElementById('textarea');
var total_counter=document.getElementById('total-counter');
var remaining_counter=document.getElementById('remaining-counter');
var maxLength=textarea.getAttribute('maxlength');
textarea.addEventListener('keyup',()=>{
    update() 
})
function update()
{  
    total_counter.innerText=textarea.value.length;
    remaining_counter.innerText=maxLength-textarea.value.length;
}
