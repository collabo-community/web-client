import { capitalizeAllFirstLetters, stringToUrlStart } from '@/@layout_shared/helpers/transform';
import  { AppInfo } from '@/@layout_shared/helpers/types';

const appName = 'app';

const urlStart = stringToUrlStart(appName);

const page: { [key: number]: string } = {
  1: 'overview',
  2: 'projects',
};

const appInfo: AppInfo = {
  id: 1,
  name: capitalizeAllFirstLetters(appName),
  pages: {
    1: {
      name: page[1],
      route: `${urlStart}/${page[1]}`,
    },
    2: {
      name: page[2],
      route: `${urlStart}/${page[2]}`,
    },
  },
};

export {
  appInfo,
  urlStart,
};
