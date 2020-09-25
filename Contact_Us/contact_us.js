// Menu Toggle

function menuToggle() {
  var nav = document.getElementById("menu-overlay");
  nav.classList.toggle("active");

  var nav = document.getElementById("toggleIcon");
  nav.classList.toggle("active");
}

//Validating the Contact form

function validate() {
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const emailTitle = document.getElementById("title");
  const message = document.getElementById("message");
  const error_message = document.getElementById("error_message");
  const success_message = document.getElementById("success_message");

  var text;

  if (name.value === "" || name.value === null) {
    text = "Name is required";
    error_message.innerHTML = text;
    error_message.style.padding = "10px";
    return false;
  }
  if (email.value === "" || name.value === null) {
    text = "Please enter a valid email";
    error_message.innerHTML = text;
    error_message.style.padding = "10px";
    return false;
  }
  if (emailTitle.value == "" || name.value === null) {
    text = "Title is required";
    console.log("1");
    error_message.innerHTML = text;
    error_message.style.padding = "10px";
    return false;
  }
  if (message.value == "" || name.value === null) {
    text = "What did you want to tell us?";
    console.log("2");
    error_message.innerHTML = text;
    error_message.style.padding = "10px";
    return false;
  }
  text = "Form Submitted Successfully!";
  console.log("3");
  success_message.innerHTML = text;
  success_message.style.padding = "10px";
  return true;
}

//If I were to actually hook up this contact form to an email address and make it "fully functional" I would use formspree to deliver the email from the inputs. https://formspree.io/

/* Form spree can handle all the functionality for sending and delivering emails with no server side code. To integrate formspree I would use the following code.

$(document).ready ->
  $('#contact-form').submit (e) ->
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const emailTitle = document.getElementById("title");
    const message = document.getElementById("message");
    
    if (name.value === "" || name.value === null) {
    alertify.error "Name is required";
    return false;
  }
  if (email.value === "" || name.value === null) {
    alertify.error "What is your email?";
    return false;
  }
  if (emailTitle.value == "" || name.value === null) {
    alertify.error "Title is required";
    return false;
  }
  if (message.value == "" || name.value === null) {
    alertify.error "What did you want to tell us?";
    return false;
  }
  else
      $.ajax
        method: 'POST'
        url: '//formspree.io/name@youremail.com'
        data: $('#contact-form').serialize()
        datatype: 'json'
      e.preventDefault()
      $(this).get(0).reset()
      alertify.success 'Message sent'
  }

*/
