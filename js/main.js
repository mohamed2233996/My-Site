let tabslist = document.querySelectorAll(".tabs li a");

let card = document.querySelectorAll(".gallery .full");

tabslist.forEach((a) => {
  a.addEventListener("click", filter)
  a.addEventListener("click", mange)
})

function filter() {
  tabslist.forEach((a) => {
    a.classList.remove("active")
    this.classList.add("active")
  });
}
function mange() {
  card.forEach((div) => {
    div.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  })

}


// Get the container element
var btnContainer = document.getElementById(".tabs");


// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < tabslist.length; i++) {
  tabslist[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}