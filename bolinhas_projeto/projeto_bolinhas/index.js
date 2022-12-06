//funções para adcionar ou deletar com um clique as bolinhas.
function adicionarBola() {
  var pw = Math.floor(Math.random() * 1000);
  var ph = Math.floor(Math.random() * 600);
  var bola = document.createElement("div");
  bola.setAttribute("class", "bola");

  bola.setAttribute("style", "left:" + pw + "px;top:" + ph + "px");
  bola.setAttribute("onclick", "deleteBola(this)");

  document.body.appendChild(bola);
}

function deleteBola(bola) {
  document.body.removeChild(bola);
}

function start() {
  setInterval(adicionarBola, 500);
}