const playBtn = document.getElementById("playBtn");
const music = document.getElementById("bgMusic");

playBtn.addEventListener("click", () => {
  music.play();
  playBtn.innerText = "🎵 Playing";
  playBtn.style.opacity = "0.7";
});
