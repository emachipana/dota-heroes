import { changeContent } from "./app/manager.js";
import { handleRoute } from "./app/router.js";

function App() {
  document.querySelectorAll("#nav-item").forEach(item => {
    item.addEventListener("click", handleRoute);
  });

  window.addEventListener("popstate", () => {
    changeContent(location.pathname);
  });

  window.addEventListener("load", () => {
    changeContent(location.pathname);
  });
}

export default App;
