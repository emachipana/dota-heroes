function HeroCard({ id, img, localized_name }) {
  const baseUri = "https:/cdn.cloudflare.steamstatic.com";

  return `
    <div 
      class="
        w-56 h-40 bg-cover bg-no-repeat bg-center
        rounded-2xl cursor-pointer transition relative
        duration-300 hover:scale-110 shadow-custom
        py-2 px-4 flex items-end justify-start overflow-hidden
      "
      style="background-image: url('${baseUri + img}')"
      id="hero-card"
    >
      <div 
        class="
          w-full h-full top-0 bottom-0 right-0 left-0 
          absolute bg-opacity-35 bg-black z-10 transition
          duration-300 hover:bg-opacity-10
        "
        href="/heroes/${id}"
      >
      </div>
      <h5 class="z-20 text-xl text-white font-bold">${localized_name}</h5>
    </div>
  `;
}

export default HeroCard;
