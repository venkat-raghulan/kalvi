const burger = document.querySelector(".burger");
const navLinksHolder = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const overlay = document.getElementById("overlay");
let clicked = false;
let navbartoggle = () => {
  {
    navLinksHolder.classList.toggle("nav-clicked");
    clicked = !clicked;
    if (clicked) {
      overlay.style.display = "block";
      burger.innerHTML =
        '<img id="burger-image" src="./assets/x.svg" alt="burger-image">';
    } else {
      overlay.style.display = "none";
      burger.innerHTML =
        '<img id="burger-image" src="./assets/menu.svg" alt="burger-image">';
    }

    navLinks.forEach((element, index) => {
      if (element.style.animation) {
        element.style.animation = "";
      } else {
        element.style.animation = `navLinkAnimation 0.5s ease forwards ${
          index / 5
        }s`;
      }
    });
  }
};

burger.onclick = navbartoggle;
overlay.onclick = navbartoggle;
