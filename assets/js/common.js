const button = document.querySelector("#btnBurger");
const aside = document.querySelector("#mainAside");

button.addEventListener("click", () => {
  button.classList.toggle("is-active");
  aside.classList.toggle("is-active");
});