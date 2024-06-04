document.addEventListener("DOMContentLoaded", function() {
    var isAdult = confirm("Você tem 18 anos ou mais?");
    if (!isAdult) {
        window.location.href = "https://www.google.com";
    }
});
