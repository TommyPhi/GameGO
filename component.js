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

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function openModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let contact = document.getElementById('contactForm');
contact.addEventListener("submit", (e) => {
  e.preventDefault();
  let fNameInput = document.getElementById('fname');
  let lNameInput = document.getElementById('lname');
  let emailInput = document.getElementById('email');
  let pNumberInput = document.getElementById('pNumber');
  let commentsInput = document.getElementById('comments');
  var emailRegx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)?$/;
  var pNumberRegx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  let fNameValidation = document.getElementById("fNameValidation");
  let lNameValidation = document.getElementById("lNameValidation");
  let emailValidation = document.getElementById("emailValidation");
  let pNumberValidation = document.getElementById("pNumberValidation");
  let commentsValidation = document.getElementById("commentsValidation");
  let validCounter = 0;
  fName = fNameInput.value.toString().trim();
  lName = lNameInput.value.toString().trim();
  email = emailInput.value.toString().trim();
  pNumber = pNumberInput.value.toString().trim();
  comments = commentsInput.value.toString();

  console.log(fName);
  console.log(lName);
  console.log(email);
  console.log(pNumber);
  console.log(comments)

  if(fName==="") {
    fNameInput.style.backgroundColor = 'rgb(232, 132, 132)';
    fNameValidation.innerHTML='Please enter your first name';
  } else {
    fNameInput.style.backgroundColor = '';
    fNameValidation.innerHTML='';
    validCounter++;
  }

  if(lName==="") {
    lNameInput.style.backgroundColor = 'rgb(232, 132, 132)';
    lNameValidation.innerHTML='Please enter your last name';
  } else {
    lNameInput.style.backgroundColor = "";
    lNameValidation.innerHTML = '';
    validCounter++;
  }

  if (email==="") {
    emailInput.style.backgroundColor = 'rgb(232, 132, 132)';
    emailValidation.innerHTML='Please enter your email';
  } else if(emailRegx.test(email)) {
    emailInput.style.backgroundColor = '';
    emailValidation.innerHTML = "";
    validCounter++;
  } else {
    emailInput.style.backgroundColor = 'rgb(232, 132, 132)';
    emailValidation.innerHTML='Please enter a valid email';
  }

  if (pNumber==="") {
    pNumberInput.style.backgroundColor = 'rgb(232, 132, 132)';
    pNumberValidation.innerHTML='Please enter a number';
  } else if(pNumberRegx.test(pNumber)) {
    pNumberInput.style.backgroundColor = '';
    pNumberValidation.innerHTML = "";
    validCounter++;
  } else {
    pNumberInput.style.backgroundColor = 'rgb(232, 132, 132)';
    pNumberValidation.innerHTML='Please enter a valid number';
  }

  if(comments==="") {
    commentsInput.style.backgroundColor = 'rgb(232, 132, 132)';
    commentsValidation.innerHTML='Please enter a comment';
  } else {
    commentsInput.style.backgroundColor = '';
    commentsValidation.innerHTML = "";
    validCounter++;
  }

  if(validCounter === 5) {
    document.getElementById("thankYouMessage").innerHTML=`Thank you ${fName} ${lName} for sending us a message!`;
    fNameInput.value = '';
    lNameInput.value = '';
    emailInput.value = '';
    pNumberInput.value = '';
    commentsInput.value='';
  }
  openModal()
  window.setTimeout(function() {
    modal.style.display="none";
    document.getElementById("thankYouMessage").innerHTML='';
    validCounter = 0;
  }, 5000)
})