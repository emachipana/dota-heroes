import Heroes from "../pages/Heroes.js";
import Home from "../pages/Home.js";
import { checkActiveRoute } from "./router.js";

export const changeContent = (route) => {
  checkActiveRoute(route);
  const container = document.getElementById("app");

  const PAGES = {
    "/": Home(),
    "/heroes": Heroes(),
    "/heroesDetail": {
      content: `<h1>Pagina de detalles de un heroe</h1`,
      listeners: () => console.log("heroes detail listenrs")
    },
    "/players": {
      content: `<h1>Pagina de players</h1>`,
      listeners: () => console.log("players listenrs")
    }
  }

  if(route.split("/")[2]) route = "/heroesDetail";

  container.innerHTML = PAGES[route].content;
  PAGES[route].listeners();
}
