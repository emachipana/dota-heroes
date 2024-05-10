function PersonCard({ name, img, position, links = [] }) {
  return `
    <div class="card gap-5">
      <img
        src="${img || "/default.jpg"}"
        alt="${name}-profile"
        class="card-image"
      />
      <div class="card-column">
        <h4 class="card-name">${name}</h4>
        <p>${position}</p>
      </div>
      <hr class="size-full h-0" />
      <div class="card-row">
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
