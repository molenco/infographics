function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "";
}

document.addEventListener("DOMContentLoaded", function() {
  hide(zanahorias);
  boton1.addEventListener("click", function() {
    show(zanahorias);
  });
  hide(gota);
  boton2.addEventListener("click", function() {
    show(gota);
  });
  hide(tractor);
  boton2.addEventListener("click", function() {
    show(tractor);
  });
  hide(keyline);
  boton2.addEventListener("click", function() {
    show(keyline);
  });
});
