// variables
const loadingScreen = document.querySelector(".loading-screen");

// Entry point
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function() {
    loadingScreen.classList.add("loading-screen-dismiss");
    setTimeout(function() {
      loadingScreen.remove();
    }, 2200);
  }, 3000);
});
