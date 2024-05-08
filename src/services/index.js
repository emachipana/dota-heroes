export const getHeroes = async () => {
  const response = await fetch("https://api.opendota.com/api/heroStats");
  return await response.json();
}
