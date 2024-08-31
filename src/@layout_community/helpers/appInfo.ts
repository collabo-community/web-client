import { capitalizeAllFirstLetters } from '@/@layout_shared/helpers/transform';
import  { AppInfo } from '@/@layout_shared/helpers/types';

/*-------------------------------------
  layoutName variable here is only used
  to save part of the string, that shows
  up in the browser tab of pages inside
  of @pages_community
-------------------------------------*/
const layoutName = 'collabo community';
//-------------------------------------

const appInfo: AppInfo = {
  name: capitalizeAllFirstLetters(layoutName),
  pages: {
    1: {
      name: 'home',
    },
  },
};

export {
  appInfo,
};
