function validateForm() {
  //define variables
  var firstName = document.forms["contactForm"]["firstName"];
  var lastName = document.forms["contactForm"]["lastName"];
  var facilitator = document.forms["contactForm"]["facilitator"];
  var firstNameErrorSpan = document.getElementById("error");
  var lastNameErrorSpan = document.getElementById("error2");
  var facilitatorErrorSpan = document.getElementById("error3");


  //validate first name with a minimum length of two (2) characters
  if (firstName.value == "" || (firstName.value.length <= 2)){
    //alert("First name must contain two (2) or more characters."); Don't use alerts?
    firstNameErrorSpan.innerHTML = "* First name must contain two (2) or more characters.";
    firstName.focus();
    return false;
  //validate first name with only alpha characters used (A-Z and a-z)
  } else if (!/^[a-zA-Z]*$/g.test(document.contactForm.firstName.value)) {
    //alert("Please enter alpha characters only.");
    firstNameErrorSpan.innerHTML = "* Please enter alpha characters only.";
    firstName.focus();
    return false;
    //validate last name with a minimum length of two (2) characters
  } else if (lastName.value == "" || (lastName.value.length <= 2)){
      //alert("Last name must contain two (2) or more characters.");
      lastNameErrorSpan.innerHTML = "* Last name must contain two (2) or more characters.";
      lastName.focus();
      return false;
      //validate last name with only alpha characters used (A-Z and a-z)
    } else if (!/^[a-zA-Z]*$/g.test(document.contactForm.lastName.value)) {
      //alert("Please enter alpha characters only.");
      lastNameErrorSpan.innerHTML = "* Please enter alpha characters only.";
      lastName.focus();
      return false;
      //Validate facilitator and constrain the possible valid values to be those of the active facilitators for the course
      //i for lowercase input
    } else if (facilitator.value == "" || (!/Josh|Chris|Fazil/i.test(document.contactForm.facilitator.value))) {
      //alert("Please enter facilitator name: Josh, Chris, or Fazil");
      facilitatorErrorSpan.innerHTML = "* Please enter facilitator name: Josh, Chris, or Fazil";
      facilitator.focus();
      return false;
    }/*else {
    x.innerHTML = "";
    return false;
  }*/
}
