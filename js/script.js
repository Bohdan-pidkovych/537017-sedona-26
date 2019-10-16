var button = document.querySelector(".appointment-button");
var form = document.querySelector(".appointment-container");
var firstDate = form.querySelector("[name=date-1]");
button.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("appointment-hide");
    firstDate.focus();
});