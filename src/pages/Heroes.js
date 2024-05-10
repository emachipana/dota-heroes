import { handleRoute } from "../app/router.js";
import HeroCard from "../components/HeroCard.js";
import Loader from "../components/Loader.js";
import { get } from "../services/index.js";

function Heroes() {
  const content = `
    <div 
      class="wrapper"
      id="heroes"
    >
      ${Loader({ text: "Descargando heroes..." })}
    </div>
  `;

  return {
    content,
    listeners: async () => {
      const heroes = await get("heroStats");
      const container = document.getElementById("heroes");
      container.innerHTML = heroes.map(hero => HeroCard(hero)).join("");
      document.querySelectorAll("#hero-card").forEach(item => {
        item.addEventListener("click", handleRoute);
      });
    }
  }
}

export default Heroes;
