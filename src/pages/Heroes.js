import { handleRoute } from "../app/router.js";
import HeroCard from "../components/HeroCard.js";
import Loader from "../components/Loader.js";
import { getHeroes } from "../services/index.js";

function Heroes() {
  const content = `
    <h1 class="my-14 text-center text-4xl font-black font-odor text-white">--------- Heroes ---------</h1>
    <div 
      class="min-h-screen px-8 mb-10 flex items-center justify-center gap-8 flex-wrap"
      id="heroes"
    >
      ${Loader({ text: "Descargando heroes..." })}
    </div>
  `;

  return {
    content,
    listeners: async () => {
      const heroes = await getHeroes();
      const loader = document.getElementById("loader");
      setTimeout(() => loader.classList.add("hidden"), 1500);
      const container = document.getElementById("heroes");
      container.innerHTML = heroes.map(hero => HeroCard(hero)).join("");
      document.querySelectorAll("#hero-card").forEach(item => {
        item.addEventListener("click", handleRoute);
      });
    }
  }
}

export default Heroes;
