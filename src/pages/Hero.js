import Loader from "../components/Loader.js";
import { getHeroes } from "../services/index.js";

function Hero({ id }) {
  const baseUri = "https://cdn.cloudflare.steamstatic.com";
  const content = `
    <div id="hero" class="min-h-lvh flex items-center justify-center px-8 py-2 flex-col gap-10">
      ${Loader({ text: "Cargando heroe..." })}
    </div>
  `;

  return {
    content,
    listeners: async () => {
      const heroes = await getHeroes();
      const hero = heroes.find(hero => hero.id === (id * 1));
      // const hero = {
      //   "id": 102,
      //   "name": "npc_dota_hero_abaddon",
      //   "primary_attr": "all",
      //   "attack_type": "Melee",
      //   "roles": [
      //     "Support",
      //     "Carry",
      //     "Durable"
      //   ],
      //   "img": "/apps/dota2/images/dota_react/heroes/abaddon.png?",
      //   "icon": "/apps/dota2/images/dota_react/heroes/icons/abaddon.png?",
      //   "base_health": 120,
      //   "base_health_regen": 1,
      //   "base_mana": 75,
      //   "base_mana_regen": 0.25,
      //   "base_armor": 0,
      //   "base_mr": 25,
      //   "base_attack_min": 2,
      //   "base_attack_max": 12,
      //   "base_str": 22,
      //   "base_agi": 23,
      //   "base_int": 19,
      //   "str_gain": 2.2,
      //   "agi_gain": 1.3,
      //   "int_gain": 1.6,
      //   "attack_range": 150,
      //   "projectile_speed": 900,
      //   "attack_rate": 1.5,
      //   "base_attack_time": 95,
      //   "attack_point": 0.56,
      //   "move_speed": 325,
      //   "turn_rate": 0.6,
      //   "cm_enabled": true,
      //   "legs": null,
      //   "day_vision": 1800,
      //   "night_vision": 800,
      //   "localized_name": "Abaddon",
      //   "1_pick": 8549,
      //   "1_win": 4631,
      //   "2_pick": 31811,
      //   "2_win": 17363,
      //   "3_pick": 55836,
      //   "3_win": 30604,
      //   "4_pick": 67578,
      //   "4_win": 37453,
      //   "5_pick": 54951,
      //   "5_win": 30338,
      //   "6_pick": 32862,
      //   "6_win": 18005,
      //   "7_pick": 18526,
      //   "7_win": 10198,
      //   "8_pick": 9167,
      //   "8_win": 4865,
      //   "turbo_picks": 177689,
      //   "turbo_picks_trend": [
      //     27992,
      //     29507,
      //     32524,
      //     31215,
      //     24081,
      //     23011,
      //     9359
      //   ],
      //   "turbo_wins": 100777,
      //   "turbo_wins_trend": [
      //     15819,
      //     16786,
      //     18446,
      //     17675,
      //     13725,
      //     13030,
      //     5296
      //   ],
      //   "pro_pick": 122,
      //   "pro_win": 54,
      //   "pro_ban": 119,
      //   "pub_pick": 300079,
      //   "pub_pick_trend": [
      //     44043,
      //     47313,
      //     51832,
      //     52904,
      //     42951,
      //     42148,
      //     18888
      //   ],
      //   "pub_win": 164804,
      //   "pub_win_trend": [
      //     24437,
      //     26028,
      //     28481,
      //     28893,
      //     23510,
      //     23073,
      //     10382
      //   ]
      // }
      const container = document.getElementById("hero");
      container.classList.remove("justify-center");
      const flexCol = "flex flex-col items-center justify-center gap-2";
      container.innerHTML = `
        <div class="w-11/12 min-h-72 rounded-2xl relative overflow-hidden">
          <div 
            class="
              w-full h-full absolute bg-no-repeat bg-cover bg-center
              top-0 bottom-0 right-0 left-0 blur-xl z-10
            "
            style="background-image: url('${baseUri + hero.img}')"
          >
          </div>
          <div class="z-20 absolute bg-black w-full h-full bg-opacity-35"></div>
          <div class="z-30 w-full h-full absolute px-8 py-6 flex items-center justify-around flex-wrap gap-8">
            <div class="flex items-center justify-center gap-8">
              <img
                alt="hero-image"
                src="${baseUri + hero.img}"
                class="rounded-2xl h-36 w-56 object-cover"
              />
              <section>
                <h3 class="text-4xl font-bold text-white">${hero.localized_name}</h3>
                <p 
                  class="text-white font-semibold text-s mt-2 uppercase"
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
                <p class="text-red-500 text-base font-bold">${hero.base_str} +${hero.str_gain}</p>
              </div>
              <div class="${flexCol}">
                <img
                  height="45px"
                  width="45px"
                  alt="strength"
                  src="/icons/agi.png"
                />
                <p class="text-green-500 text-base font-bold">${hero.base_agi} +${hero.agi_gain}</p>
              </div>
              <div class="${flexCol}">
                <img
                  height="45px"
                  width="45px"
                  alt="strength"
                  src="/icons/int.png"
                />
                <p class="text-sky-400 text-base font-bold">${hero.base_int} +${hero.int_gain}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }
}

export default Hero;
