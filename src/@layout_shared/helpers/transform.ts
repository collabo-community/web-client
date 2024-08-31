
const capitalizeAllFirstLetters = (text: string) => {
  return text.replace(/(^\w{1})|(\s+\w{1})/g, firstLetter => firstLetter.toUpperCase());
};

const getLastIndexOfCharaterInString = ({ text, char }: { text: string; char: string }) => {
  return text.lastIndexOf(char);
};

// TODO: Move to external library we are building
// const replaceAll_X_with_Y_inString = ({ text, textToChange, newText }: { text: string; textToChange: string; newText: string }) => {
//   return text.replaceAll(textToChange, newText);
// };

// const changeStringToLowerCase = ({ text }: { text: string }) => {
//   return text.toLowerCase();
// };

export {
  capitalizeAllFirstLetters,
  getLastIndexOfCharaterInString,
};