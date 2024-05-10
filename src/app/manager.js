import Hero from "../pages/Hero.js";
import Heroes from "../pages/Heroes.js";
import Home from "../pages/Home.js";
import { checkActiveRoute } from "./router.js";

export const changeContent = (route) => {
  checkActiveRoute(route);
  const container = document.getElementById("app");
  container.classList = [];
  const id = route.split("/")[2];

  const PAGES = {
    "/": Home(),
    "/heroes": Heroes(),
    "/heroesDetail": Hero({ id }),
    "/players": {
      content: `<h1>Pagina de players</h1>`,
      listeners: () => console.log("players listenrs")
    }
  }

  if(id) route = "/heroesDetail";

  container.innerHTML = PAGES[route].content;
  PAGES[route].listeners();
}
