const burger = document.querySelector(".burger");
const navLinksHolder = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const overlay = document.getElementById("overlay");
let clicked = false;
let navbartoggle = () => {
  {
    navLinksHolder.classList.toggle("nav-clicked");
    disableScroll();
    // body.classList.toggle("body-overflow");
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

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}
