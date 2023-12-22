const button = document.querySelector("#btnBurger");

button.addEventListener("click", () => {
  button.classList.toggle("is-active");
});