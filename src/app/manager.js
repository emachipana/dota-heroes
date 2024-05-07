import Home from "../pages/Home.js";
import { checkActiveRoute } from "./router.js";

export const changeContent = (route) => {
  checkActiveRoute(route);
  const container = document.getElementById("app");

  const PAGES = {
    "/": Home(),
    "/heroes": {
      content: `<h1>Pagina de heroes</h1>`,
      listeners: () => console.log("heroes listenrs")
    },
    "/heroesDetail": {
      content: `<h1>Pagina de detalles de un heroe</h1`,
      listeners: () => console.log("heroes detail listenrs")
    },
    "/players": {
      content: `<h1>Pagina de players</h1>`,
      listeners: () => console.log("players listenrs")
    }
  }

  const heroId = route.split("/")[2];
  if(heroId) {
    container.innerHTML = PAGES["/heroesDetail"].content;
    return PAGES["/heroesDetail"].listeners();
  }

  container.innerHTML = PAGES[route].content;
  PAGES[route].listeners();
}
