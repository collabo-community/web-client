import { capitalizeAllFirstLetters } from '@/modules/shared/helpers/transform';

const toPageTitle = (pageName: string, appName: string) => { //not exported only used in this file for now
  return `${pageName} | ${appName}`;
};

const getPage = (pathname: string, urlStart: string, appName: string) => {
  const thisPage = capitalizeAllFirstLetters(pathname.replace(`${urlStart}/`, ''));
  const pageTitle = toPageTitle(thisPage, appName);
  return {
    thisPage,
    pageTitle,
  };
};

export {
  getPage,
};