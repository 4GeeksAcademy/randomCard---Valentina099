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
  //function numeroRandomCarta(valoresCarta) {
  //console.log(Math.cell(Math.random() * 13));
  // }

  // Seleccionar aleatoriamente entre cutro pintas : corazones treboles, picas, diamantes
  let simbolos = ["♦", "♥", "♠", "♣"];
  let randomSimbolo = Math.floor(Math.random() * simbolos.length);
  console.log(simbolos[randomSimbolo]);

  // Mostrar en HTML el numero
  document.querySelector("#cardNumber").innerHTML = valoresCarta[randomValor];
  // Mostrar la pinta
  document.querySelector("#simbolo").innerHTML = simbolos[randomSimbolo];
  document.querySelector("#simbolo2").innerHTML = simbolos[randomSimbolo];

  // Cuando sean corazones y diamantes que sea rojo y treboles y picas negro

  // Hacer los cambios graficos
};
