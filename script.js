// Variables
const container = document.querySelector(".settings-container");
const iconToggle = document.querySelector("#icon-toggle");
const containerBox = document.querySelectorAll(".settings");
const profileContainer = document.querySelector(".profile-container");
const heading = document.querySelector(".headline");

// Function
iconToggle.addEventListener("click", () => {
  container.classList.toggle("dark-mode");
  profileContainer.classList.toggle("light-mode");

  heading.addClass = "colorWhite";
  heading.classList.toggle("colorWhite");

  for (let i = 0; i < containerBox.length; i++) {
    containerBox[i].classList.toggle("light-mode");
  }
});
