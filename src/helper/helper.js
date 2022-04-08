const BASE_URL = 'https://glittery-dull-snickerdoodle.glitch.me/v1';
export async function getFetch(resource) {
  try {
    const resp = await fetch(`${BASE_URL}/${resource}`);
    const dataInJS = await resp.json();
    return dataInJS;
  } catch (error) {
    console.log('getFetch error', error);
    return false;
  }
}
