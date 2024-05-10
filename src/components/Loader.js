function Loader({ text }) {
  const images = ["jugger", "monkey", "pudge"];
  const randomIndex = Math.floor(Math.random() * 3);

  return `
    <div 
      class="loader"
      id="loader"
    >
      <p class="loader-text">${text}</p>
      <img
        id="img-loader"
        alt="background-image"
        class="loader-img"
        src="/loader/${images[randomIndex]}.png"
      />
    </div>
  `;
}

export default Loader;
