var boton1 = document.querySelector("#boton1");
var boton2 = document.querySelector("#boton2");
var gota = document.querySelector("#gota");
var keyline = document.querySelector("#keyline");
var tractor = document.querySelector("#tractor");
var zanahorias = document.querySelector("#zanahorias");

function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "";
}

document.addEventListener("DOMContentLoaded", function() {
  hide(zanahorias);
  boton1.click();
  show(zanahorias);
  hide(gota);
  boton2.click();
  show(gota);
  hide(tractor);
  boton2.click();
  show(tractor);
  hide(keyline);
  boton2.click();
  show(keyline);
});
