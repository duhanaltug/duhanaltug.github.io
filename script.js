document.getElementById("centered-box").addEventListener("click", function () {
  changeBackground();
  addConfetti();
  document.getElementById("message").style.display = "none"; // Tıkladıktan sonra mesajı gizle
});

function addConfetti() {
  const confettiCount = 50;
  const confettiColors = ["#ff69b4", "#ff6347", "#00ffff", "#ffff00"];
  const container = document.getElementById("container");

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.backgroundColor =
      confettiColors[Math.floor(Math.random() * confettiColors.length)];
    container.appendChild(confetti);

    // Konfetilerin konumunu belirle
    const startPositionX = Math.random() * container.offsetWidth;
    const startPositionY = Math.random() * container.offsetHeight;
    confetti.style.left = startPositionX + "px";
    confetti.style.top = startPositionY + "px";
  }

  // Confetti parçalarını animasyonla hareket ettir
  const confettiElements = container.getElementsByClassName("confetti");
  Array.from(confettiElements).forEach((confetti, index) => {
    confetti.style.animation = `fall 3s ease-in-out ${
      Math.random() * 3
    }s infinite`;
  });
}

function changeBackground() {
  var centeredBox = document.getElementById("centered-box");
  centeredBox.style.display = "none";

  var newDiv = document.createElement("div");
  newDiv.id = "new-box";
  newDiv.className = "animated-box"; // Eklenen yeni div'e animasyon class'ını ekleyin
  newDiv.style.width = "300px";
  newDiv.style.height = "200px";
  newDiv.style.background = "linear-gradient(to right, #ffb6c1, #ff69b4)";
  newDiv.style.border = "10px solid transparent";
  newDiv.style.borderImage = "linear-gradient(to right, #ffb6c1, #ff69b4)";
  newDiv.style.borderImageSlice = "1";
  newDiv.style.textAlign = "center";
  newDiv.style.display = "flex";
  newDiv.style.alignItems = "center";
  newDiv.style.justifyContent = "center";

  var newText = document.createElement("h1");
  newText.textContent = "Kadınlar Günün Kutlu Olsun Sevgilim";
  newText.style.fontSize = "34px";
  newDiv.appendChild(newText);

  centeredBox.parentNode.insertBefore(newDiv, centeredBox.nextSibling);
}
