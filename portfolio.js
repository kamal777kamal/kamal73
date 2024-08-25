function handleModal(modal, openBtn, closeBtn) {
    openBtn.onclick = function() {
        modal.style.display = "block";
    };
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

var contactModal = document.getElementById("contactModal");
var contactBtn = document.getElementById("contactBtn");
var closeContact = document.getElementById("closeBtn");

var certModal = document.getElementById("certificationModal");
var certBtn = document.getElementById("certificationBtn");
var closeCert = document.getElementById("closeCertBtn");

var projectsModal = document.getElementById("projectsModal");
var proBtn = document.getElementById("projectsBtn");
var closePro = document.getElementById("closeProBtn");

handleModal(contactModal, contactBtn, closeContact);
handleModal(certModal, certBtn, closeCert);
handleModal(projectsModal, proBtn, closePro);
