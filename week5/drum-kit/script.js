const keyMap = {
  a: "kick",
  s: "snare",
  d: "hihat",
  f: "clap",
  g: "openhat",
  h: "boom",
  j: "ride",
  k: "tink",
  l: "tom",
};

const buttons = document.querySelectorAll(".drum-button");

function playSound(sound) {
  const audio = document.querySelector(`audio[data-sound="${sound}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  activateButton(sound);
}

function activateButton(sound) {
  const button = document.querySelector(`.drum-button[data-sound="${sound}"]`);
  if (!button) {
    return;
  }
  button.classList.add("is-active");
  setTimeout(() => {
    button.classList.remove("is-active");
  }, 120);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const sound = button.getAttribute("data-sound");
    playSound(sound);
  });
});

document.addEventListener("keydown", (event) => {
  const sound = keyMap[event.key.toLowerCase()];
  if (!sound) {
    return;
  }
  playSound(sound);
});
