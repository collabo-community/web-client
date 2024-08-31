import { capitalizeAllFirstLetters, stringToUrlStart } from '@/@module_shared/helpers/transform';
import  { AppInfo } from '@/@module_shared/helpers/types';

const appName = 'community';

const urlStart = stringToUrlStart(appName);

const page: {[key: number]: string } = {
  1: 'home',
};

const appInfo: AppInfo = {
  id: 1,
  name: capitalizeAllFirstLetters(appName),
  pages: {
    1: {
      name: page[1],
      route: `${urlStart}/${page[1]}`,
    },
  },
};

export {
  appInfo,
  urlStart,
};
