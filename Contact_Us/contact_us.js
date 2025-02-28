// Menu Toggle

function menuToggle() {
  var nav = document.getElementById("menu-overlay");
  nav.classList.toggle("active");

  var nav = document.getElementById("toggleIcon");
  nav.classList.toggle("active");
}

//Validating the Contact form

function validate() {
  //grabs all HTML inputs and sets their values to const.
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const emailTitle = document.getElementById("title");
  const message = document.getElementById("message");
  const error_message = document.getElementById("error_message");
  const success_message = document.getElementById("success_message");

  // Creates a var called text that will be given a value below
  var text;

  //this conditional basically checks to see if the form was submitted correctly. If it is missing elements based on what is defined in the if statement for each element than the form will not submit and the error message HTML element will output the message for that element.
  if (name.value === "" || name.value === null) {
    text = "Name is required";
    error_message.innerHTML = text;
    error_message.style.padding = "10px";
    return false;
  } else if (email.value === "" || !email.value.includes("@")) {
    text = "Please enter a valid email";

    error_message.innerHTML = text;
    error_message.style.padding = "10px";
    return false;
  } else if (emailTitle.value == "" || emailTitle.value === null) {
    text = "Title is required";
    error_message.innerHTML = text;
    error_message.style.padding = "10px";
    return false;
  } else if (message.value == "" || message.value === null) {
    text = "What did you want to tell us?";
    error_message.innerHTML = text;
    error_message.style.padding = "10px";
    return false;
  }

  // If no conditionals are met then the form must be filled out correctly. In this case we will output the success message
  text = "Form Submitted Successfully!";
  error_message.innerHTML = "";
  error_message.style.padding = "0px";
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
