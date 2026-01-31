document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("playBtn");
  const music = document.getElementById("bgMusic");

  if (!playBtn || !music) {
    console.error("Music elements not found");
    return;
  }

  playBtn.addEventListener("click", () => {
    music.play().then(() => {
      playBtn.innerText = "🎵 Playing";
      playBtn.style.opacity = "0.7";
    }).catch(err => {
      alert("Tap again to allow music 🎵");
      console.error(err);
    });
  });
});
