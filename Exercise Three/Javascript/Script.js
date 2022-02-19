let toggleBtn = document.getElementById('toggleButton')
let toggleField = document.getElementById('passwordField')

toggleBtn.addEventListener('click', function () {
    if (toggleField.type === "password") {
      toggleField.type = "text";
    } else {
      toggleField.type = "password";
    }

})
