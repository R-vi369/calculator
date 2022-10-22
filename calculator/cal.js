
// created by Ravi 

function calculate(x){
    form.display.value=form.display.value+x;
}
function evol(){
try{
    form.display.value=eval(form.display.value);
}
catch(err){
        form.display.value="wrong input :(";
}
}
function sell(){
try{
    from.display.value=eval(form.display.value);
    throw 1;
}
catch(err){
    form.display.value="Wrong Input :(";
}
}