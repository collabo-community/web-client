
const capitalizeAllFirstLetters = (text: string) => {
  return text.replace(/(^\w{1})|(-\w{1})|(\s+\w{1})/g, match => match.toUpperCase().replace('-', ' '));
};

const stringToUrlStart = (text: string) => {
  return `/${text.replaceAll(' ', '-').toLowerCase()}`;
};

export {
  capitalizeAllFirstLetters,
  stringToUrlStart,
};