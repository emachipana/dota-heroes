function PersonCard({ name, img, position, links = [] }) {
  return `
    <div 
      class="
        border-3 w-56 h-80 p-5 rounded-2xl cursor-pointer
        transition-transform duration-300 hover:scale-110
        flex flex-col items-center justify-center gap-5
      text-white bg-sky-custom
      "
    >
      <img
        src="${img || "/default.jpg"}"
        alt="${name}-profile"
        width="120px"
        height="120px"
        class="rounded-full object-cover border-2"
      />
      <div class="flex items-center flex-col">
        <h4 class="text-xl font-bold text-center">${name}</h4>
        <p class="text-center">${position}</p>
      </div>
      <hr class="size-full h-0" />
      <div class="size-full h-auto flex items-center justify-between px-1">
        ${
          links.map(link => (
            `
              <a
                target="_blank"
                href="${link.url || "/"}"
                rel="noreferrer"
              >
                <img
                  height="28px"
                  width="28px"
                  src="/icons/${link.name}.svg"
                  alt="${link.name}-icon"
                />
              </a>
            `
          )).join("")
        }
      </div>
      </div>
  `;
}

export default PersonCard;
