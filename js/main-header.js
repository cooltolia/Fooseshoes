var input = document.getElementById("search");
var label = document.querySelector(".main-header__search-label");


label.addEventListener("click", function(event) {
  event.preventDefault();
  input.classList.toggle("moving");
});
