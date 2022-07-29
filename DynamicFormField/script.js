var name_field=document.getElementById('name_field');
var Add=document.getElementById('Add');
var Delete=document.getElementById('Delete');

Add.onclick=function(){
    var newField=document.createElement('input');
    newField.setAttribute('type','text');
    newField.setAttribute('placeholder','new field');
   
        name_field.appendChild(newField);
    
    
}

Delete.onclick=function(){
    var deleteField=name_field.getElementsByTagName('input');
    if(deleteField.length>=3){
        name_field.removeChild(deleteField[deleteField.length-1]);
    }
}