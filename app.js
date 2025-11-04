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

  // Manually update particles.js mouse position parameters
  // Assuming you have access to the particlesJS instance or its config
  window.pJSDom[0].pJS.interactivity.mouse.pos_x = mouseX;
  window.pJSDom[0].pJS.interactivity.mouse.pos_y = mouseY;
  window.pJSDom[0].pJS.interactivity.status = "mousemove";
});
