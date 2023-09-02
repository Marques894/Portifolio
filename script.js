const changeThemeBtn = document.querySelector ("#change-theme");

changeThemeBtn.addEventListener("change", function () {
    documento.body.classList.toggle("darkmode");
})