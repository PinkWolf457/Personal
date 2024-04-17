document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loading");
  const mainContent = document.getElementById("main");

  if (!localStorage.getItem("isLoaded")) {
    loader.style.display = "block";
    loader.style.opacity = "1";

    const duration = 3000;
    setTimeout(() => {
      loader.style.opacity = "0";

      setTimeout(() => {
        loader.style.backgroundColor = "transparent";
      }, 250);

      setTimeout(() => {
        loader.style.display = "none";
        mainContent.classList.add("show");
        localStorage.setItem("isLoaded", "true");
      }, 500);
    }, duration);
  } else {
    loader.style.display = "none";
    mainContent.classList.add("show");
  }
});
