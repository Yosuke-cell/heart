const ui = document.getElementById("ui");
const total = 120; // 密度
const scale = 18;  // ハートの大きさ

for (let i = 0; i < total; i++) {
  const t = (i * (2 * Math.PI)) / total;

  const x = scale * (13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
  const y = scale * (16 * Math.sin(t)**3);

  const span = document.createElement("span");
  span.className = "love_word";
  span.style.left = `calc(50% + ${x}px)`;
  span.style.top  = `calc(50% - ${y}px)`;
  span.style.animationDelay = `${i * -0.08}s`;
  span.textContent = "I love you";

  ui.appendChild(span);
}