var form=document.getElementById('form');
var Username=document.getElementById('username');
var password=document.getElementById('password');
var confirmpassword=document.getElementById('confirmpassword');
var email=document.getElementById('email');

form.addEventListener('submit',function(event){
    event.preventDefault();
    checkinput();
});

function checkinput(){
    var UsernameValue=Username.value;
    if(UsernameValue===''){
        setErrorFor(Username,'Username cannot be blank');
    }
    else{
        setSuccessFor(Username);
    }
    var passwordvalue=password.value;
    if(passwordvalue===''){
        setErrorFor(password,'Password cannot be blank');
    }
    else{
        setSuccessFor(password);
    }
    var confirmpasswordValue=confirmpassword.value;
    if(confirmpasswordValue===''){
        setErrorFor(confirmpassword,'Password cannot be blank');
    }
    else{
        if(confirmpasswordValue===passwordvalue){
            setSuccessFor(confirmpassword);
        }
        else{
            setErrorFor(confirmpassword,'Password & Confirm password not same');
        }
    }
    var emailValue=email.value;
    if(emailValue===''){
        setErrorFor(email,'Email cannot be blank');
    }
    else{
        if(isEmail(emailValue)){
            setSuccessFor(email);
        }
        else{
            setErrorFor(email);
        }
    }
}
function setErrorFor(input,message){
    var divcontrol=input.parentElement;
    var small=divcontrol.querySelector('small');
    small.innerText=message;
    divcontrol.className='form-control-error';
}
function setSuccessFor(input){
    var formcontrol=input.parentElement;
    formcontrol.className='form-control-success';
}
function isEmail(a1){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(a1);
}