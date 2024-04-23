// navbar
const menuToggle = document.querySelector('.toggle')
const navMenu = document.querySelector('.menu')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    navMenu.classList.toggle('active')
})


// selector

const day = document.querySelector("#day");
const month = document.querySelector("#month");
const selector = document.querySelector(".selector");
const pricingcard = document.querySelector(".pricingcard");

month.addEventListener("click", () => {
    selector.classList.add("active");
    pricingcard.classList.add("active");
});

day.addEventListener("click", () => {
    selector.classList.remove("active");
    pricingcard.classList.remove("active");
});




// gfhrhrhrhr

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}