const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountains_behind = document.getElementById("mountains_behind");
const fullname = document.getElementById("fullname");
const info = document.getElementById("info");
const mountains_front = document.getElementById("mountains_front");
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const value = window.scrollY;

  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1 + "px";

  mountains_behind.style.top = value * 0.5 + "px";
  mountains_front.style.top = value * 0 + "px";

  fullname.style.marginRight = value * 4 + "px";
  fullname.style.marginTop = value * 1 + "px";

  header.style.marginTop = value * 0.2 + "px";
});
