var modal = document.getElementById('modalRecrutement');
var btn = document.querySelector('#recrutement i');
var span = document.querySelector('.close-btn');

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}