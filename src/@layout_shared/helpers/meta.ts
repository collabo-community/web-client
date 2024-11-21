import { capitalizeAllFirstLetters, getLastIndexOfCharaterInString } from '@/@layout_shared/helpers/transform';

const toPageTitle = (pageName: string, layoutName: string | undefined) => { //not exported only used in this file for now
  return layoutName ? `${pageName} | ${layoutName}` : pageName;
};

const getPage = ({ pathname, layoutName }: { pathname: string; layoutName?: string | undefined }) => {
  /*---------------------------------------------------------------
  For pages inside of @pages_community, change pathname accordingly
  if pathname says '/'
  ---------------------------------------------------------------*/
  pathname === '/' ? pathname = `${pathname}home` : pathname;
  //---------------------------------------------------------------
  const pathNameLastSlashIndex = getLastIndexOfCharaterInString({ text: pathname, char: '/' });
  const pageName = pathname.slice(pathNameLastSlashIndex + 1); // TODO/REMINDER: there's a method that does this in our boilerplates templates, use it instead when revamping
  const thisPage = capitalizeAllFirstLetters(pageName);
  const pageTitle = toPageTitle(thisPage, layoutName);
  return {
    thisPage,
    pageTitle,
  };
};

export {
  getPage,
};