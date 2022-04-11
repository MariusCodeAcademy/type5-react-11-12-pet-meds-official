const BASE_URL = 'https://glittery-dull-snickerdoodle.glitch.me/v1';

const LOCAL_BASE = '/data';

export async function getFetchLocal(resource) {
  try {
    const resp = await fetch(`${LOCAL_BASE}/${resource}.json`);
    const dataInJS = await resp.json();
    return dataInJS;
  } catch (error) {
    console.log('getFetch error', error);
    return false;
  }
}
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
export async function deleteFetch(resource, id) {
  try {
    const resp = await fetch(`${BASE_URL}/${resource}/${id}`, {
      method: 'DELETE',
    });
    const dataInJS = await resp.json();
    return dataInJS;
  } catch (error) {
    console.log('deleteFetch error', error);
    return false;
  }
}

export async function sendFetch(resource, dataToPost) {
  try {
    const resp = await fetch(`${BASE_URL}/${resource}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToPost),
    });
    const dataInJS = await resp.json();
    return dataInJS;
  } catch (error) {
    console.log('sendFetch error', error);
    return false;
  }
}
