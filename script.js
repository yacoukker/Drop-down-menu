// get dropdown menu 
const dropdown = document.querySelector('.dropdown') ;

//get inner element from dropdown
const select = dropdown.querySelector('.select') ;
const caret = dropdown.querySelector('.caret') ;
const menu = dropdown.querySelector('.menu') ;
const options =dropdown.querySelectorAll('.menu li') ;
const selected =dropdown.querySelector('.selected') ;
console.log(dropdown.querySelector('.select span').innerHTML)

//add a clicked event to do select
select.addEventListener('click',()=>{
    //add clicked select style to the select element
    select.classList.toggle('select-clicked');
    //add retate style to the cret element
    caret.classList.toggle('caret-retate') ;
    //add open menu style to the menu elenment 
    menu.classList.toggle('menu-open')
});

//loop all option 
options.forEach(option => {
    //add clicked to the option
    option.addEventListener('click',()=>{
        //change selected inner text to the clicked option 
        selected.innerHTML = option.innerHTML ;
        //remove the clicked style 
        select.classList.remove('select-clicked') ;
        //remove the retate style 
        caret.classList.remove('caret-retate') ;
        //remove open menu style 
        menu.classList.remove('menu-open');
        //remove class active from all option 
        options.forEach(op=>{
            op.classList.remove('active')
        });
        //add class active to the clicked option
        option.classList.add('active') ;
    }) ;
}) ;
