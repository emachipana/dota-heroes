function Loader({ text }) {
  const images = ["jugger", "monkey", "pudge"];
  const randomIndex = Math.floor(Math.random() * 3);

  return `
    <div 
      class="animate-pulse rounded-full h-72 w-72 shadow-custom relative flex items-center justify-center overflow-hidden"
      id="loader"
    >
      <p class="text-white absolute z-20 text-xl font-bold">${text}</p>
      <img
        id="img-loader"
        alt="background-image"
        class="object-cover h-full w-full z-10"
        src="/loader/${images[randomIndex]}.png"
      />
    </div>
  `;
}

export default Loader;
