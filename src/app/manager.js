import Hero from "../pages/Hero.js";
import Heroes from "../pages/Heroes.js";
import Home from "../pages/Home.js";
import Players from "../pages/Players.js";
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
    "/players": Players()
  }

  if(id) route = "/heroesDetail";

  container.innerHTML = PAGES[route].content;
  PAGES[route].listeners();
}
