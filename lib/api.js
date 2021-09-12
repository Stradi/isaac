export function getStrapiURL(path = "") {
  return `${
    process.env.STRAPI_API_URL || "http://localhost:1337"
  }${path}`
};

export async function fetchAPI(path) {
  const requestUri = getStrapiURL(path);
  const response = await fetch(requestUri);
  const data = await response.json();

  return data;
}