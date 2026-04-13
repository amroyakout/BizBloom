const preSubmitUi = document.getElementById("preSubmit");
const form = document.getElementById("detailsForm");

(function(){
  emailjs.init("h84JytWxmC4Z_MG-c");
})();

form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_aj51c8h", "template_2rcec47", {
        name: document.getElementById("nameInput").value,
        email: document.getElementById("emailInput").value,
        phone: document.getElementById("phoneInput").value,
        date: document.getElementById("preferredDate").value,
        time: document.getElementById("preferredTime").value,
        brief: document.getElementById("briefInput").value
    })
    .then(function() {
        //successfully sent
        window.location.href = "success/success.html"
    })
    .catch(function(error) {
        //error sending email
    });

    emailjs.send("service_aj51c8h", "template_q3lacvh", {
        name: document.getElementById("nameInput").value,
        email: document.getElementById("emailInput").value,
        date: document.getElementById("preferredDate").value,
        time: document.getElementById("preferredTime").value,
    })
    .then(function() {
        //successfully sent
    })
    .catch(function(error) {
        //error sending email
    });

});
