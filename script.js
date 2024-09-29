var small_menu = document.querySelector(".toggle_menu");
var menu = document.querySelector(".menu");

small_menu.onclick = function () {
  small_menu.classList.toggle("active");
  menu.classList.toggle("responsive");
};
emailjs.init({
    publicKey: "_MqUWuTicMdn2F0iR",
  });
   const form = document.getElementById("contact");
  
  const alertMessage = document.getElementById("alert-message");
  var messageDuration = 1000;
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const myName = document.getElementById("nom").value;
    const myEmail = document.getElementById("email").value;
    const myMessage = document.getElementById("message").value;
  
    emailjs.sendForm("service_f3dukpo", "template_8dvixa9", form).then(
      () => {
        alertMessage.classList.add("alert-success");
        alertMessage.textContent = "votre message a été envoyé avec succes";
        form.reset();
        console.log('SUCCESS!');
  
        setTimeout(function () {
          alertMessage.classList.remove("alert-success");
          alertMessage.style.diplay = "none";
        }, messageDuration);
      },
      (error) => {
        alertMessage.classList.add("alert-error");
        alertMessage.textContent =
          "une erreur est survenue lors de l envoi de votre message";
        form.reset();
        console.log("FAILED...", error);
      }
    );
  }); 
  
  