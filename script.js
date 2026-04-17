const display = document.getElementById('display');

/* function keword plus  function name (parameters){
//function body
// }
function name(argument);

*/

function append (value){

display.value += value;

}

function erase (){
    display.value ='';
}


function calculation(){
try{
    display.value = eval(display.value)
}
catch(error){
    display.value = 'error'
}
}

function eraseLast(){
    display.value = display.value.slice(0,-1)
}

