var email = document.getElementById('email');
  var submit = document.getElementById('submit');
  var error = document.getElementById('error');
  function validateEmail(val){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (val.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }
  function validate(){
    var val = email.value;
    var res = validateEmail(val);
    if(res == false){
      email.style.borderColor = 'red';
      error.style.display = 'block';
    }
  }
  email.addEventListener('input',()=>{
    email.style.borderColor = 'hsl(223, 87%, 63%)';
    error.style.display = 'none';
  })