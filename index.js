
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
        alert("Sent consultation email to consulter(s)!");
    })
    .catch(function(error) {
        alert("Failed to send!")
        console.log(error);
    });
});
