const to_animate = document.getElementsByClassName("animated-text");
const full_texts = [];
var pos = [];
for (const x of to_animate) {
  full_texts.push(x.textContent);
  x.textContent = "";
  pos.push(0);
}

setInterval(() => {
  for (var i = 0; i < to_animate.length; i++) {
    if (pos[i] === 0) {
      to_animate[i].textContent = "";
    }
    to_animate[i].textContent += full_texts[i][pos[i]];
    pos[i]++;
    if (pos[i] === full_texts[i].length) {
      pos[i] = 0;
    }
  }
}, 100);
