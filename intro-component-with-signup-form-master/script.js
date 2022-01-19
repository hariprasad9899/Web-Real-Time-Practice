var claim,inputs,email
email = document.getElementById('email');
inputs = document.getElementsByClassName('inputs')
claim = document.getElementsByClassName('claim')[0];

// Function to validate Email

function validateEmail(val){
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (val.match(validRegex)) {
    return true
  } else {
    return false
  }
}

// Adding event listener to claim button so that fname,lname, and password
// will be inidcted as wrong if empty.
// Also adding the email validation in the same event listener for email
//validation.
claim.addEventListener('click', ()=>{
  for(let x = 0; x < inputs.length; x++){
    if(inputs[x].value.length <=0){
      inputs[x].nextElementSibling.style.display = 'block';
      inputs[x].style.background = 'url("images/icon-error.svg") no-repeat 98% center';
      inputs[x].style.backgroundSize = '6%';
      inputs[x].style.border = '1px solid red';
    }
  }
  var result = validateEmail(email.value)
  if(result == false){
    email.nextElementSibling.style.display = 'block';
    email.style.background = 'url("images/icon-error.svg") no-repeat 98% center';
    email.style.backgroundSize = '6%';
    email.style.border = '1px solid red';
  }
  else{
    email.nextElementSibling.style.display = 'none';
    email.style.background = 'none';
    email.style.border = '1px solid rgb(200, 189, 189)';
  
  }
})

// Two event listeners for input event, to clear all the error messages 
// and erro indications 
email.addEventListener('input', ()=>{
  email.nextElementSibling.style.display = 'none';
  email.style.background = 'none';
  email.style.border = '1px solid rgb(200, 189, 189)';
})
for(let y = 0; y < inputs.length; y++){
  inputs[y].addEventListener('input', ()=>{
    inputs[y].nextElementSibling.style.display = 'none';
    inputs[y].style.background = 'none';
    inputs[y].style.border = '1px solid rgb(200, 189, 189)';
  })
}