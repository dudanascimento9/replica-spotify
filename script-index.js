const campoBusca = document.getElementById("campoBusca");
const btnLimpar = document.getElementById("btnLimpar");

campoBusca.addEventListener("input", () => {
  btnLimpar.style.display = campoBusca.value ? "block" : "none";
});

btnLimpar.addEventListener("click", () => {
  campoBusca.value = "";
  campoBusca.focus();
  btnLimpar.style.display = "none";
});