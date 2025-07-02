function abrirCarta() {
  const carta = document.getElementById("carta");
  carta.classList.add("ativa");
  iniciarChuva();
}

function iniciarChuva() {
  const chuva = document.getElementById("chuva");

  const intervalo = setInterval(() => {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.textContent = "❤️";
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = Math.random() * 8 + 8 + "px"; // MINI corações
    coracao.style.animationDuration = 3 + Math.random() * 2 + "s";
    chuva.appendChild(coracao);

    setTimeout(() => {
      coracao.remove();
    }, 5000);
  }, 150);

  setTimeout(() => clearInterval(intervalo), 10000);
}

