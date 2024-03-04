const panels = document.querySelectorAll(".panel");

function agrandar() {
  this.classList.toggle("big");
}
function activar(evento) {
  if (evento.propertyName.includes("flex")) {
    this.classList.toggle("abierto");
  }
}

panels.forEach((panel) => panel.addEventListener("click", agrandar));
panels.forEach((panel) => panel.addEventListener("transitionend", activar));
