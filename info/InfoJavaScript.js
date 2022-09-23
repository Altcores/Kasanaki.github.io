const navbarlink1 = document.querySelector(".nv1");
const navbarlink2 = document.querySelector(".nv2");
const navbarlink3 = document.querySelector(".nv3");
const navbarlink4 = document.querySelector(".nv4");
navbarlink1.onclick = () => {
  navbarlink1.classList.add("active");
  navbarlink2.classList.remove("active");
  navbarlink3.classList.remove("active");
  navbarlink4.classList.remove("active");
};

navbarlink2.onclick = () => {
  navbarlink1.classList.remove("active");
  navbarlink2.classList.add("active");
  navbarlink3.classList.remove("active");
  navbarlink4.classList.remove("active");
};

navbarlink3.onclick = () => {
  navbarlink1.classList.remove("active");
  navbarlink2.classList.remove("active");
  navbarlink3.classList.add("active");
  navbarlink4.classList.remove("active");
};

navbarlink4.onclick = () => {
  navbarlink1.classList.remove("active");
  navbarlink2.classList.remove("active");
  navbarlink3.classList.remove("active");
  navbarlink4.classList.add("active");
};

onload = () => {
  let loading = document.querySelector(".loading");
  let ghost = document.querySelector(".ghost");
  var body = document.querySelector("body");
  let loding = document.createElement("h2");

  loding.textContent = "Gopoh Ta Pean?";
  ghost.appendChild(loding);

  let loaded = setInterval(() => {
    loding.textContent = loding.textContent + "!";
  }, 500);

  body.style.overflow = "hidden";

  setTimeout(() => {
    clearInterval(loaded);
    body.style.overflow = "visible";
    loading.style.opacity = "0%";
    loading.style.visibility = "hidden";
  }, 1500);
};
