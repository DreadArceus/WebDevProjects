const h = document.getElementById("hour");
const m = document.getElementById("min");
const s = document.getElementById("sec");
const h_hand = document.getElementById("hour-hand");
const m_hand = document.getElementById("min-hand");

const d = new Date();
h.textContent = d.getHours();
m.textContent = d.getMinutes();
s.textContent = d.getSeconds();

setInterval(() => {
  s.textContent = parseInt(s.textContent) + 1;
  if (s.textContent === "60") {
    s.textContent = 0;
    m.textContent = parseInt(m.textContent) + 1;
    if (m.textContent === "60") {
      m.textContent = 0;
      h.textContent = parseInt(h.textContent) + 1;
      if (h.textContent === "24") {
        h.textContent = 0;
      }
    }
  }
}, 1000);

setInterval(() => {
  h_hand.style.transform = `rotate(${
    30 * parseInt(h.textContent) +
    0.5 * parseInt(m.textContent) +
    parseInt(s.textContent) / 120
  }deg)`;
  m_hand.style.transform = `rotate(${
    180 + 6 * parseInt(m.textContent) + 0.1 * parseInt(s.textContent)
  }deg)`;
}, 1000);
