const form = document.querySelector("form");
const dateInput = document.querySelector("#date");
const emailInput = document.querySelector("#email");
const confirmEmailInput = document.querySelector("#confirmEmail");

function contactForm() {
    if (dateInput.value !== "") {
      const selectedDate = new Date(dateInput.value);
       today = new Date();
       
       today.setDate(today.getDate() + 1);
       today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        dateInput.setCustomValidity("Please select a date that's at least one day in the future.");
      } else {
        dateInput.setCustomValidity("");
      }
    }
  
    if (emailInput.value !== confirmEmailInput.value) {
      confirmEmailInput.setCustomValidity("Please make sure your email addresses match.");
    } else {
      confirmEmailInput.setCustomValidity("");
    }
  
    if (form.checkValidity()) {
      const name = document.querySelector("#name").value;
      const phone = document.querySelector("#phone").value;
      const email = document.querySelector("#email").value;
      const confirmEmail = document.querySelector("#confirmEmail").value;
      const message = document.querySelector("#message").value;
      const project = document.querySelector("#project").value;
      const contactMethod = document.querySelector("#contactMethod").value;
      const duration = document.querySelector("#duration").value;
      const date = document.querySelector("#date").value;
      
      const messageText = 
        `Your data has been submitted! ㄟ(≧◇≦)ㄏ\n
        Name: ${name}\n
        Phone: ${phone}\n
        Email: ${email}\n
        Message: ${message}\n
        Proposed Project: ${project}\n
        Contact Method: ${contactMethod}\n
        Duration: ${duration}\n
        Preferred Start Date: ${date}`;
      alert(messageText);
    }
  
    return false;
}