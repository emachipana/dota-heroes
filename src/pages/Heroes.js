import { handleRoute } from "../app/router.js";
import HeroCard from "../components/HeroCard.js";
import Loader from "../components/Loader.js";
import { getHeroes } from "../services/index.js";

function Heroes() {
  const content = `
    <div 
      class="min-h-screen py-8 px-2 mb-10 flex items-center justify-center gap-8 flex-wrap"
      id="heroes"
    >
      ${Loader({ text: "Descargando heroes..." })}
    </div>
  `;

  return {
    content,
    listeners: async () => {
      const heroes = await getHeroes();
      const container = document.getElementById("heroes");
      container.innerHTML = heroes.map(hero => HeroCard(hero)).join("");
      document.querySelectorAll("#hero-card").forEach(item => {
        item.addEventListener("click", handleRoute);
      });
    }
  }
}

export default Heroes;
