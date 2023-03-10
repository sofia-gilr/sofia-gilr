//----------------- lecture_01 ----------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  //----------------- lecture_02 ----------------------------------//
  const cardAdj = [
    { name: "animal", img: "images/animal.jpg" },
    { name: "panda", img: "images/panda.jpg" },
    { name: "gato", img: "images/gato.jpg" },
    { name: "perro", img: "images/perro.jpg" },
    { name: "lobo", img: "images/lobo.jpg" },
    { name: "tortuga", img: "images/tortuga.jpg" },
    { name: "animal", img: "images/animal.jpg" },
    { name: "panda", img: "images/panda.jpg" },
    { name: "gato", img: "images/gato.jpg" },
    { name: "perro", img: "images/perro.jpg" },
    { name: "lobo", img: "images/lobo.jpg" },
    { name: "tortuga", img: "images/tortuga.jpg" }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "images/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }
  //----------------- lecture_04 ----------------------------------//

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
