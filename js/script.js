var button = document.querySelector(".appointment-button");
var form = document.querySelector(".appointment-container");
if (form != null) {
    var firstDate = form.querySelector("[name=date-1]");
    var secondDate = form.querySelector("[name=date-2]");
    var adult = form.querySelector("[name=adult]");
    var children = form.querySelector("[name=children]");
    var formInput = form.querySelectorAll("input");
    form.classList.add("appointment-hide");
    button.addEventListener("click", function (evt) {
        evt.preventDefault();
        if (form.classList.contains("appointment-hide")) {
            form.classList.remove("appointment-hide");           
            form.classList.remove("appointment-animation-close");
            form.classList.add("appointment-animation-open");
            firstDate.focus();
        } else {
            form.classList.remove("appointment-animation-open");
            form.classList.add("appointment-animation-close");
            form.classList.add("appointment-hide");
        }
    });
    form.addEventListener("submit", function (evt) {
        if (!firstDate.value || !secondDate.value || !adult.value || !children.value) {
            evt.preventDefault();
            for (var i = 0; i < formInput.length; i++) {
               formInput[i].classList.add("appointment-input-empty");
            }
        } else {
            if (isStorageSupport) {
                localStorage.setItem("adult", adult.value);
                localStorage.setItem("children", children.value);
            }
        }
    });
}