const hamburguer = document.querySelector("#hamburguer");
const nav = document.querySelector("#nav");
const swtch = () => {
  hamburguer.classList.toggle("is-active");
  nav.classList.toggle("nav-active");
}
hamburguer.addEventListener("click", swtch);