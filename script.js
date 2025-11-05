const loginBtn = document.querySelector(".btn-login");
const overlay = document.querySelector(".overlay");
const loginForm = document.querySelector(".loginform");
const closeBtn = document.querySelector(".close-btn");

// Open modal
loginBtn.addEventListener("click", () => {
    overlay.classList.add("showOverlay");
    loginForm.classList.add("showForm");
});

// Close modal on overlay click
overlay.addEventListener("click", () => {
    overlay.classList.remove("showOverlay");
    loginForm.classList.remove("showForm");
});

// Close modal on close button click
closeBtn.addEventListener("click", () => {
    overlay.classList.remove("showOverlay");
    loginForm.classList.remove("showForm");
});

