let pantalla = document.getElementById("pantalla");
let operador = "";
let valorAnterior = "";
let valorActual = "";

document.querySelectorAll("button[data-operador]").forEach(boton => {
  boton.addEventListener("click", () => {
    operador = boton.getAttribute("data-operador");
    valorAnterior = pantalla.value;
    pantalla.value = "";
  });
});

document.getElementById("igual").addEventListener("click", () => {
  valorActual = pantalla.value;

  let resultado = 0;

  let a = parseFloat(valorAnterior);
  let b = parseFloat(valorActual);

  if (operador === "+") {
    resultado = a + b;
  } else if (operador === "-") {
    resultado = a - b;
  } else if (operador === "*") {
    resultado = a * b;
  } else if (operador === "/") {
    resultado = b !== 0 ? a / b : "Error";
  }

  pantalla.value = resultado;
});
