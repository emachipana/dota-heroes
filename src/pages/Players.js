import Loader from "../components/Loader.js";
import { get } from "../services/index.js";

function Players() {
  const flexCol = "flex flex-col gap-1 items-center justify-between h-full";
  const content = `
    <div 
      class="wrapper"
      id="players"
    >
      ${Loader({ text: "Descargando jugadores..." })}
    </div>
  `;

  return {
    content,
    listeners: async () => {
      const players = await get("proPlayers");
      const container = document.getElementById("players");
      container.innerHTML = players.map((player, index) => {
        const lastMatch = new Date(player.last_match_time);
        const dateOptions = {
          year: "numeric",
          month: "long",
          day: "numeric"
        };

        return (
          `
            <div class="card gap-3">
              <img
                src="${player.avatarfull || "/default.jpg"}"
                alt="${player.name}-profile"
                class="card-image"
              />
              <div class="card-column">
                <h4 class="font-bold text-lg">${player.name}</h4>
                <p class="font-medium">${player.team_name}</p>
              </div>
              <hr class="size-full h-0" />
              <div class="card-row">
                <div class="${flexCol}">
                  <p class="font-bold text-base">Perfil</p>
                  <a
                    target="_blank"
                    href="${player.profileurl || "/"}"
                    rel="noreferrer"
                  >
                    <img
                      height="26px"
                      width="26px"
                      src="/icons/steam.svg"
                      alt="steam-icon"
                    />
                  </a>
                </div>
                <div class="${flexCol}">
                  <p class="font-bold text-base">Última partida</p>
                  <p class="text-s font-semibold">${lastMatch.toLocaleDateString("es", dateOptions)}</p>
                </div>
              </div>
              <p class="absolute font-bold top-2 left-4">
                ${index + 1}th
              </p>
            </div>
          `
        )
      }).join("");
    }
  }
}

export default Players;
