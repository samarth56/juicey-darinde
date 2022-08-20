let inc = document.getElementsByClassName('inc')
let dec = document.getElementsByClassName('dec')

// for incrementing the value
for(let i = 0; i < inc.length; i++){
    let button = inc[i];
    button.addEventListener('click',function(event){
        let buttonClicked = event.target;
        // console.log(buttonClicked)
        let input = buttonClicked.parentElement.children[1];
        // console.log(input);
        let inputVal = input.value
        // console.log(inputVal)
        let newVal = parseInt(inputVal) + 10;
        console.log(newVal);
        input.value = newVal

    } )

}


// for decrementing the value
for(let i = 0; i < dec.length; i++){
    let button = dec[i];
    button.addEventListener('click',function(event){
        let buttonClicked = event.target;
        // console.log(buttonClicked)
        let input = buttonClicked.parentElement.children[1];
        // console.log(input);
        let inputVal = input.value
        // console.log(inputVal)
        let newVal = parseInt(inputVal) - 10;
        console.log(newVal);
        input.value = newVal

     
    } )

}


// ham menu 

let ham = document.getElementById('ham')
let navbar = document.querySelector('.navbar')
let menubar = document.querySelectorAll('.menubar')

ham.addEventListener('click', ()=>{

    navbar.classList.toggle('active')
    navbar.classList.toggle('navbar')
    
    
    
})








