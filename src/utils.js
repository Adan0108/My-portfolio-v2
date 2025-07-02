export const getImageUrl = (path) => {
  return `/assets/${path}`;
};

/*
export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
*/