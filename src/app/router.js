import { changeContent } from "./manager.js";

export const handleRoute = (e) => {
  e.preventDefault();
  const route = e.target.getAttribute("href");
  changeContent(route);
  history.pushState(null, null, route);
  window.scrollTo(0, 0);
}

export const checkActiveRoute = (currentRoute) => {
  const items = document.querySelectorAll("#nav-item");
  items.forEach(item => {
    item.classList.add("text-slate-300");
    item.classList.remove("text-white");
  });
  
  const activeItem = Array.from(items).find(item => {
    if(currentRoute.split("/")[2]) return item.getAttribute("href") === "/heroes";

    return item.getAttribute("href") === currentRoute;
  });

  activeItem.classList.remove("text-slate-300");
  activeItem.classList.add("text-white");
}
