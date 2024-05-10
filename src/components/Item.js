function Item({ title, content, type }) {
  return `
    <section class="size-full flex items-center justify-between px-4 py-2 ${type === 1 ? "bg-blue-1" : "bg-blue-2"}">
      <p class="text-slate-400 text-xs font-semibold">${title}:</p>
      <p class="text-white text-base font-bold">${content === "null" ? 0 : content}</p>
    </section>
  `;
}

export default Item;
