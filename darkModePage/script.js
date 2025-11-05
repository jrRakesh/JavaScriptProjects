let toggle = document.querySelector("#toggle");
toggle.addEventListener("change", (e) => {
  if (document.documentElement.dataset.theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
  } else if (document.documentElement.dataset.theme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
});
