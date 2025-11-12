/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "./particles.json", function () {
  console.log("callback - particles.js config loaded");
});

document.addEventListener("mousemove", function (event) {
  const screenHeight = window.innerHeight; // viewport height in pixels
  const screenWidth = window.innerWidth; // viewport width in pixels

  // Calculate pixel values for the 4vh and 5vw padding
  const paddingY = (5 * screenHeight) / 100;
  const paddingX = (4 * screenWidth) / 100;

  let mouseX = event.clientX - paddingX;
  let mouseY = event.clientY - paddingY;

  window.pJSDom[0].pJS.interactivity.mouse.pos_x = mouseX;
  window.pJSDom[0].pJS.interactivity.mouse.pos_y = mouseY;
  window.pJSDom[0].pJS.interactivity.status = "mousemove";
});

const interactiveElements = document.querySelectorAll(".interactive");
const cursor = document.getElementById("cursor-default");

document.addEventListener("mousemove", function (event) {
  // Adjust for page scroll to get accurate position
  var x = event.clientX + window.scrollX;
  var y = event.clientY + window.scrollY;

  // Position element centered on cursor
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-big");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-big");
  });
});

document.getElementById("boy-in-the-bubble-button").onclick = function () {
  openFullscreenContentById("boy-in-the-bubble-video");
};

document.getElementById("farm-documentary-button").onclick = function () {
  openFullscreenContentById("farm-documentary-video");
};

document.getElementById("ten-pictures-button").onclick = function () {
  openFullscreenContentByClassName("ten-pictures");
};

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight" || event.code === "KeyD") {
    tenPicturesNext();
  }
  if (event.key === "ArrowLeft" || event.code === "KeyA") {
    tenPicturesPrevious();
  }
  if (event.key === "Escape") {
    closeFullscreenContent();
  }
});

const fullscreenContent = document.querySelectorAll(".fullscreen-content");

function openFullscreenContentByClassName(content) {
  openFullscreenContent(document.getElementsByClassName(content)[0]);
}

function openFullscreenContentById(content) {
  openFullscreenContent(document.getElementById(content));
}

function openFullscreenContent(content) {
  content.style.visibility = "visible";
  document.getElementById("close-button").style.visibility = "visible";
  document.getElementById("particles-js").style.visibility = "hidden";
  document.getElementById("content").style.visibility = "hidden";
}

function closeFullscreenContent() {
  fullscreenContent.forEach((element) => {
    element.style.visibility = "hidden";
  });
  document.getElementById("close-button").style.visibility = "hidden";
  document.getElementById("particles-js").style.visibility = "visible";
  document.getElementById("content").style.visibility = "visible";
}

document.getElementById("close-button").onclick = closeFullscreenContent;

let pictureIndex = 0;
const maxPictureIndex = 9;

document.getElementById("ten-pictures-button-previous").onclick = function () {
  tenPicturesPrevious();
  console.log("clicked button");
};
document.getElementById("ten-pictures-button-next").onclick = tenPicturesNext;

function tenPicturesPrevious() {
  pictureIndex = Math.max(-1, pictureIndex - 1);
  if (pictureIndex == -1) {
    pictureIndex = maxPictureIndex;
  }
  animateDirection(pictureIndex, "-5");
  displayPicture(pictureIndex);
}

function tenPicturesNext() {
  pictureIndex = Math.min(maxPictureIndex + 1, pictureIndex + 1);
  if (pictureIndex == maxPictureIndex + 1) {
    pictureIndex = 0;
  }
  animateDirection(pictureIndex, "5");
  displayPicture(pictureIndex);
}

function displayPicture(index) {
  const visiblePicture = document.getElementsByClassName("picture-visible")[0];
  const newVisiblePicture = document.getElementById("pictures").children[index];

  visiblePicture.classList.remove("picture-visible");
  visiblePicture.classList.add("picture-hidden");

  newVisiblePicture.classList.remove("picture-hidden");
  newVisiblePicture.classList.add("picture-visible");
}

function animateDirection(index, direction) {
  const element = document.getElementById("pictures").children[index];
  element.style.setProperty("--translate-x", direction + "vh");
  void element.offsetWidth;
}
