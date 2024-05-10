import Item from "../components/Item.js";
import Loader from "../components/Loader.js";
import { getHeroes } from "../services/index.js";

function Hero({ id }) {
  const baseUri = "https://cdn.cloudflare.steamstatic.com";
  const content = `
    <div id="hero" class="min-h-detail flex items-center justify-center px-8 py-2 flex-col gap-5 mb-8">
      ${Loader({ text: "Cargando heroe..." })}
    </div>
  `;

  return {
    content,
    listeners: async () => {
      const heroes = await getHeroes();
      const hero = heroes.find(hero => hero.id === (id * 1));
      const container = document.getElementById("hero");
      container.classList.remove("justify-center");
      const flexCol = "flex flex-col items-center justify-center gap-2";
      const flexRow = "flex flex-col items-center justify-center w-68";
      container.innerHTML = `
        <div class="xl:w-11/12 w-full xl:h-68 h-100 rounded-2xl relative overflow-hidden">
          <div 
            class="
              w-full h-full absolute bg-no-repeat bg-cover bg-center
              top-0 bottom-0 right-0 left-0 blur-xl z-10
            "
            style="background-image: url('${baseUri + hero.img}')"
          >
          </div>
          <div class="z-20 absolute bg-black w-full h-full bg-opacity-35"></div>
          <div class="z-30 w-full h-full absolute px-4 py-6 flex items-center xl:justify-around justify-center flex-wrap gap-8">
            <div class="flex items-center justify-center gap-8 flex-wrap">
              <img
                alt="hero-image"
                src="${baseUri + hero.img}"
                class="rounded-2xl h-36 w-56 object-cover"
              />
              <section>
                <h3 class="text-4xl xl:text-start text-center font-bold text-white">${hero.localized_name}</h3>
                <p 
                  class="text-white text-center font-semibold text-s mt-2 uppercase"
                >
                  ${hero.attack_type} - <span class="text-slate-300">${hero.roles.join(", ")}</span>
                </p>
              </section>
            </div>
            <div class="w-80 h-28 rounded-xl bg-black bg-opacity-60 flex items-center justify-between py-4 px-6">
              <div class="${flexCol}">
                <img
                  height="45px"
                  width="45px"
                  alt="strength"
                  src="/icons/str.png"
                />
                <p class="text-red-500 text">${hero.base_str} +${hero.str_gain}</p>
              </div>
              <div class="${flexCol}">
                <img
                  height="45px"
                  width="45px"
                  alt="strength"
                  src="/icons/agi.png"
                />
                <p class="text-green-500 text">${hero.base_agi} +${hero.agi_gain}</p>
              </div>
              <div class="${flexCol}">
                <img
                  height="45px"
                  width="45px"
                  alt="strength"
                  src="/icons/int.png"
                />
                <p class="text-sky-400 text">${hero.base_int} +${hero.int_gain}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-11/12 w-full px-2 flex-wrap flex items-center xl:justify-between justify-center gap-4">
          <div class="${flexRow}">
            ${Item({ title: "ATAQUE BASE", type: 1, content: `${hero.base_attack_min} - ${hero.base_attack_max}`})}
            ${Item({ title: "ALCANCE DE ATAQUE", type: 2, content: `${hero.attack_range}`})}
            ${Item({ title: "TASA DE ATAQUE", type: 1, content: `${hero.attack_rate}`})}
            ${Item({ title: "PUNTOS POR ATAQUE", type: 1, content: `${hero.attack_point}`})}
          </div>
          <div class="${flexRow}">
            ${Item({ title: "SALUD", type: 1, content: `${hero.base_health}`})}
            ${Item({ title: "REGENERACION DE SALUD", type: 2, content: `${hero.base_health_regen}`})}
            ${Item({ title: "MANÁ", type: 1, content: `${hero.base_mana}`})}
            ${Item({ title: "REGERACION DE MANÁ", type: 2, content: `${hero.base_mana_regen}` })}
          </div>
          <div class="${flexRow}">
          ${Item({ title: "VELOCIDAD DEL PROYECTIL", type: 1, content: `${hero.projectile_speed}` })}
            ${Item({ title: "VELOCIDAD DE MOVIMIENTO", type: 2, content: `${hero.move_speed}`})}
            ${Item({ title: "VELOCIDAD DE GIRO", type: 1, content: `${hero.turn_rate}`})}
            ${Item({ title: "MR BASE", type: 2, content: `${hero.base_mr}` })}
          </div>
          <div class="${flexRow}">
            ${Item({ title: "VISION DE DIA", type: 1, content: `${hero.day_vision}`})}
            ${Item({ title: "VISION DE NOCHE", type: 2, content: `${hero.night_vision}`})}
            ${Item({ title: "DISPONIBLE EN MC", type: 1, content: `${hero.cm_enabled ? "Si" : "No"}`})}
            ${Item({ title: "ARMADURA_BASE", type: 2, content: `${hero.base_armor}`})}
          </div>
        </div>
      `;
    }
  }
}

export default Hero;
