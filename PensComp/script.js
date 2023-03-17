window.setInterval(function () {
  doTransition("next");
}, 6000);

function doTransition(direction) {
  let nextOrPrevActive;

  let currentActive = document.querySelector(".active");
  currentActive.classList.remove("active");

  if ("next" == direction) nextOrPrevActive = currentActive.nextElementSibling;
  else nextOrPrevActive = currentActive.previousElementSibling;

  if (nextOrPrevActive) nextOrPrevActive.classList.add("active");
  else document.querySelector(".item").classList.add("active");
}

document.getElementById("lf").addEventListener("click", doTransition);
document.getElementById("rt").addEventListener(
  "click",
  function () {
    doTransition("next");
  },
  false
);
