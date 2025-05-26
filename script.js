const texto = `Fala gatinha maromba 🏋🏽‍♀️❤️

Eu preparei essa cartinha pra te fazer um convite.

Você topa tomar um sorvetin comigo essa semana? 😍`;

function mostrarMensagem() {
  let i = 0;
  const carta = document.getElementById("carta");
  const abrirBtn = document.getElementById("abrir");
  abrirBtn.style.display = "none";
  carta.innerHTML = "";

  const intervalo = setInterval(() => {
    carta.innerHTML += texto[i];
    i++;
    if (i >= texto.length) {
      clearInterval(intervalo);
      document.getElementById("botoes").classList.remove("hidden");
    }
  }, 90);
}

// Lógica dos botões
document.getElementById("sim").addEventListener("click", () => {
  document.getElementById("resposta").innerText = "Te vejo Domingo <3";
});

const naoBtn = document.getElementById("nao");

naoBtn.addEventListener("mouseover", () => {
  const container = document.querySelector(".container");
  const maxX = container.offsetWidth - naoBtn.offsetWidth;
  const maxY = container.offsetHeight - naoBtn.offsetHeight;

  const randX = Math.random() * maxX;
  const randY = Math.random() * maxY;

  naoBtn.style.left = `${randX}px`;
  naoBtn.style.top = `${randY}px`;
});
