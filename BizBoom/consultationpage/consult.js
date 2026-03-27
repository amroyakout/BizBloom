const indivradio = document.getElementById('indivRadio');
const orgradio = document.getElementById('orgRadio');
const submitBtn = document.getElementById('submitBtn');

submitBtn.onclick = function() {
    if(indivradio.checked) {
        console.log("indiv radio checked");
        window.location.href = '/consultationpage/Individual/indvilConsult.html';
    }
    else if(orgradio.checked) {
        console.log("org radio checked");
        window.location.href = '/consultationpage/Organisation/orgConsult.html';
    }
}
