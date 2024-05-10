import { changeContent } from "./app/manager.js";
import { handleRoute } from "./app/router.js";

function App() {
  const toggle = document.getElementById("toggle-theme");
  const theme = localStorage.getItem("theme");
  if(!theme) localStorage.setItem("theme", "light");

  if(theme === "dark") {
    document.documentElement.classList.add("dark");
    toggle.setAttribute("src", "/icons/light.svg");
    toggle.dataset.theme = "dark";
  }

  toggle.addEventListener("click", () => {
    let theme = toggle.dataset.theme;
    
    if(theme === "dark") {
      document.documentElement.classList.remove("dark");
      theme = "light";
    }else {
      document.documentElement.classList.add("dark");
      theme = "dark";
    }

    toggle.setAttribute("src", `/icons/${theme === "dark" ? "light" : "dark"}.svg`);
    toggle.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  });

  document.querySelectorAll("#nav-item").forEach(item => {
    item.addEventListener("click", handleRoute);
  });

  window.addEventListener("popstate", () => {
    changeContent(location.pathname);
  });

  window.addEventListener("load", () => {
    changeContent(location.pathname);
    toggle.classList.remove("hidden");
  });
}

export default App;
