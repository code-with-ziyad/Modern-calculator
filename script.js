const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        value = button.value;
if(value === 'C'){
    display.value = '';
}
else if(value === '='){
    try{
        display.value = eval(display.value);
    }
    catch(e){
        display.value = 'error';
    }
    }
    else{
        display.value += value;
    }

    })
})