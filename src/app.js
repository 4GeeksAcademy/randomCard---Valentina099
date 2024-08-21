/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Seleccionar aleatoriamente un valor dentro de 2 al 10 y JQK
  let valoresCarta = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomValor = Math.floor(Math.random() * valoresCarta.length);
  console.log(valoresCarta[randomValor]);

  // Seleccionar aleatoriamente entre cutro pintas : corazones treboles, picas, diamantes
  let simbolos = [
    { simbolo: "♦", color: "red" },
    { simbolo: "♥", color: "red" },
    { simbolo: "♠", color: "black" },
    { simbolo: "♣", color: "black" }
  ];
  let randomSimbolo = simbolos[Math.floor(Math.random() * simbolos.length)];
  console.log(simbolos[randomSimbolo]);

  // Mostrar en HTML el numero
  document.querySelector("#cardNumber").innerHTML = valoresCarta[randomValor];
  // Mostrar la pinta
  document.querySelectorAll(".simbolo").forEach((elem, index) => {
    elem.innerHTML = randomSimbolo.simbolo;
    elem.style.color = randomSimbolo.color;
  });
};
