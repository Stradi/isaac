export function getImageURL(path) {
  return `${process.env.STRAPI_API_URL || "http://localhost:1337"}${path}`;
}

export async function fetchImageAsBase64(uri) {
  const response = await fetch(getImageURL(uri));
  const arrayBuffer = await response.arrayBuffer();

  return Buffer.from(arrayBuffer).toString("base64");
}