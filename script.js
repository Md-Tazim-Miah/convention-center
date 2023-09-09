// script.js
const toastContainer = document.querySelector(".toast-container");
const toast = document.querySelector(".toast");

let toastShown = false;

window.addEventListener("scroll", () => {
    // Set the scroll position threshold (adjust as needed)
    const scrollThreshold = 500;

    // Check if the user has scrolled down beyond the threshold and the toast is not already shown
    if (window.scrollY > scrollThreshold && !toastShown) {
        showToast("20% off on next booking");
        toastShown = true;
    }
});

function showToast(message) {
    // Set the toast message
    toast.querySelector(".toast-message").textContent = message;

    // Show the toast
    toast.classList.add("show");

    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
    }, 10000);
}
