export const get = async (endpoint) => {
  const response = await fetch(`https://api.opendota.com/api/${endpoint}`);
  return await response.json();
}
