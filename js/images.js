document.addEventListener("DOMContentLoaded", function() {
  zanahorias.style.display = "none";
  gota.style.display = "none";
  tractor.style.display = "none";
  keyline.style.display = "none";

  boton1.addEventListener("click", function() {
    zanahorias.style.display = "";
  });

  boton2.addEventListener("click", function() {
    gota.style.display = "";
    tractor.style.display = "";
    keyline.style.display = "";
  });
});
