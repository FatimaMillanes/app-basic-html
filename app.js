
const buttons = document.querySelectorAll('button');

const playnote = event=>{
    console.log(event);
    alert('hola');
    
}
buttons.forEach(
    button => button.addEventListener('click',func)
);