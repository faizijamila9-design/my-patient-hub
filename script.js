// ===============================
// GET SIDEBAR
// ===============================

const sidebar = document.getElementById("sidebar");


// ===============================
// GET MENU BUTTON
// ===============================

const menuBtn = document.getElementById("menuBtn");


// ===============================
// SHOW / HIDE SIDEBAR
// ===============================

menuBtn.addEventListener("click", function () {

    sidebar.classList.toggle("hide");

});