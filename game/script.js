import { updateGround, setupGround } from "./ground.js";
import { updateDino, setupDino, getDinoRect, setDinoLose } from "./ghost.js";
import { updateCactus, setupCactus, getCactusRects } from "./tomb.js";

const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 35;
const SPEED_SCALE_INCREASE = 0.00001;

const worldElem = document.querySelector("[data-world]");
const scoreElem = document.querySelector("[data-score]");
const startScreenElem = document.querySelector("[data-start-screen]");
const loseScreenElem = document.querySelector("[data-lose-screen]");

setPixelToWorldScale();
window.addEventListener("resize", setPixelToWorldScale);
document.addEventListener("keydown", handleStart, { once: true });

let lastTime;
let speedScale;
let score;
function update(time) {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(update);
    return;
  }
  const delta = time - lastTime;

  updateGround(delta, speedScale);
  updateDino(delta, speedScale);
  updateCactus(delta, speedScale);
  updateSpeedScale(delta);
  updateScore(delta);
  if (checkLose()) return handleLose();

  lastTime = time;
  window.requestAnimationFrame(update);
}

function checkLose() {
  const dinoRect = getDinoRect();
  return getCactusRects().some((rect) => isCollision(rect, dinoRect));
}

function isCollision(rect1, rect2) {
  return (
    rect1.left < rect2.right &&
    rect1.top < rect2.bottom &&
    rect1.right > rect2.left &&
    rect1.bottom > rect2.top
  );
}

function updateSpeedScale(delta) {
  speedScale += delta * SPEED_SCALE_INCREASE;
}

function updateScore(delta) {
  score += delta * 0.01;
  scoreElem.textContent = Math.floor(score);
}

function handleStart() {
  lastTime = null;
  speedScale = 1;
  score = 0;
  setupGround();
  setupDino();
  setupCactus();
  startScreenElem.classList.add("hide");
  loseScreenElem.classList.add("hide");
  window.requestAnimationFrame(update);
}

function handleLose() {
  setDinoLose();
  setTimeout(() => {
    document.addEventListener("keydown", handleStart, { once: true });
    loseScreenElem.classList.remove("hide");
  }, 100);
}

function setPixelToWorldScale() {
  let worldToPixelScale;
  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldToPixelScale = window.innerWidth / WORLD_WIDTH;
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT;
  }

  worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`;
  worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`;
}

onload = () => {
  let loading = document.querySelector(".loading");
  let loding = document.createElement("h2");
  let ghost = document.querySelector(".ghost");
  let loadror = document.querySelector(".loadror");
  var body = document.querySelector("body");

  loadror.style.display = "none";
  loding.textContent = "You Want To Play, Lets Play";
  ghost.appendChild(loding);

  let loaded = setInterval(() => {
    loding.textContent = loding.textContent + "!";
  }, 500);

  setTimeout(() => {
    clearInterval(loaded);
    loading.style.opacity = "0%";
    loading.style.visibility = "hidden";
  }, 1500);
};

const link = document.querySelector("a");
const realback = document.querySelector(".real-back");
const world = document.querySelector(".world");
const noback = document.querySelector(".noback");
const back = document.querySelector(".back");
var l = 0;
back.onclick = () => {
  l++;
  {
    if (l == 0) {
      back.style.left = "0px";
    }
    if (l == 1) {
      back.style.left = "20px";
    }
    if (l == 2) {
      back.style.left = "1000px";
      back.style.top = "30px";
    }
    if (l == 3) {
      back.style.bottom = "30px";
    }
    if (l == 4) {
      back.style.left = "1200px";
    }
    if (l == 5) {
      back.style.top = "100px";
    }
    if (l == 6) {
      realback.classList.remove("hide");
      back.classList.add("hide");
      noback.classList.remove("hide");
    }
  }
};

let loading = document.querySelector(".loading");

noback.onclick = () => {
  realback.classList.add("hide");
  noback.classList.add("hide");
  world.classList.add("margin");
};
