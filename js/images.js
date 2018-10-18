function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "";
}

document.addEventListener("DOMContentLoaded", function() {
  var boton1 = document.querySelector("#boton1");
  var boton2 = document.querySelector("#boton2");
  var gota = document.querySelector("#gota");
  var keyline = document.querySelector("#keyline");
  var tractor = document.querySelector("#tractor");
  var zanahorias = document.querySelector("#zanahorias");

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
