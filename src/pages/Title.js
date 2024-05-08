function Title({ title }) {
  return `
    <div class="py-4 px-8 my-8 flex w-min mx-auto shadow-lg shadow-gray-900 items-center justify-center bg-green-custom rounded-xl">
      <h2 class="text-white text-4xl font-black text-center">${title}</h2>
    </div>
  `;
}

export default Title;
