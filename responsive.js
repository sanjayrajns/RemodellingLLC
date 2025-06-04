
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburgerIcon");
  const closeBtn = document.getElementById("closeSideMenu");
  const sideMenu = document.getElementById("sideMenu");

  hamburger.addEventListener("click", () => {
    sideMenu.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("open");
  });

  window.addEventListener("click", (e) => {
    if (
      sideMenu.classList.contains("open") &&
      !sideMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      sideMenu.classList.remove("open");
    }
  });
});