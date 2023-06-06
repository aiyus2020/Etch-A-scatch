const canvas = document.querySelector("#etch-a-sketch");
let ctx = canvas.getContext("2d");
const shake = document.querySelector(".shake");
const move_amount = 10;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = move_amount;
let hue = 0;
ctx.strokeStyle = `hsl(100, 100%, 50%)`;
const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw({ key }) {
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case "ArrowUp":
      y -= move_amount;
      break;
    case "ArrowDown":
      y += move_amount;
      break;
    case "ArrowLeft":
      x -= move_amount;
      break;
    case "ArrowRight":
      x += move_amount;
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

function handlekey(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
  }
}
window.addEventListener("keydown", handlekey);

function shakes() {
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    "animationend",
    function () {
      canvas.classList.remove("shake");
    },
    { once: true }
  );
}
function clear() {
  ctx = "";
}
shake.addEventListener("click", shakes);
