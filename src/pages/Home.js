import { handleRoute } from "../app/router.js";
import PersonCard from "../components/PersonCard.js";

function Home() {
  const content = `
    <div class="hero">
      <h1 class="text-6xl font-black text-white font-odor text-center">DOTA HEROES</h1>
      <p class="text-white text-3xl font-semibold text-center">Conoce a todos los heros y los mejores jugadores</p>
      <button 
        class="py-1.5 px-4 text-white text-lg font-bold bg-green-custom rounded-lg"
        id="hero-button"
        href="/heroes"
      >
        Conocer heroes
      </button>
    </div>
    <h2 class="text-3xl text-center my-10 text-white font-bold">Hecho por:</h2>
    <div class="flex size-full p-6 items-center justify-evenly gap-8 flex-wrap mb-6">
      ${PersonCard({
        position: "Developer",
        name: "Branlee Landeo",
        img: "https://avatars.githubusercontent.com/u/166888308",
        links: [
          {
            url: "https://github.com/branliprime",
            name: "github",
          },
          {
            url: "https://www.linkedin.com/in/branlee-jose-landeo-cardenas-a9155a278",
            name: "linkedin",
          },
          {
            name: "global",
          },
          {
            url: "https://www.instagram.com/branli_dev",
            name: "instagram",
          },
        ]
      })}
      ${PersonCard({
        position: "FullStack Developer",
        name: "Enmanuel Chipana",
        img: "https://avatars.githubusercontent.com/u/94902863",
        links: [
          {
            url: "https://github.com/emachipana",
            name: "github",
          },
          {
            url: "https://www.linkedin.com/in/enmanuel-chipana",
            name: "linkedin",
          },
          {
            name: "global",
          },
          {
            url: "https://www.instagram.com/enmanuelchipana",
            name: "instagram",
          },
        ]
      })}
      ${PersonCard({
        position: "Developer",
        name: "Danilo Huaylinos",
        img: "https://avatars.githubusercontent.com/u/150541746",
        links: [
          {
            url: "https://github.com/danilo674220",
            name: "github",
          },
          {
            url: "https://www.linkedin.com/in/danilo-percy-huaylinos-ayzana-3a760b278",
            name: "linkedin"
          },
          {
            name: "global",
          },
          {
            url: "https://www.instagram.com/ezzedaniloha",
            name: "instagram",
          },
        ]
      })}
    </div>
`;

  return {
    content,
    listeners: () => {
      const button = document.getElementById("hero-button");
      button.addEventListener("click", handleRoute);
    }
  }
}

export default Home;
