function openNav() {
    document.getElementById("sidenav").style.width = "350px";
    document.getElementById("sidenav").style.padding = "60px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("sidenav").style.padding = "0";
  document.body.style.backgroundColor = "white";
}

let contact = document.getElementById('contactForm');
contact.addEventListener("submit", (e) => {
  e.preventDefault();
  let fNameInput = document.getElementById('fname');
  let lNameInput = document.getElementById('lname');
  let emailInput = document.getElementById('email');
  let pNumberInput = document.getElementById('pNumber');
  var emailRegx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)?$/;
  var pNumberRegx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  fName = fNameInput.value.toString().trim();
  lName = lNameInput.value.toString().trim();
  email = emailInput.value.toString().trim();
  pNumber = pNumberInput.value.toString().trim();

  console.log(fName);
  console.log(lName);
  console.log(email);
  console.log(pNumber);

  if (email==="") {
    alert('please enter an email');
  } else if(emailRegx.test(email)) {
      alert('valid email')
  } else {
      alert('invalid email')
  }

  if (pNumber==="") {
    alert('please enter a number');
  } else if(pNumberRegx.test(pNumber)) {
    alert('valid number')
  } else {
    alert('invalid number')
  }
})

function isValidInput(whichInput) {
  document.getElementById(whichInput);
    document.style.background = 'green';
}

function isInvalidInput(whichInput) {
  document.getElementById(whichInput);
    document.style.background = 'red';
}