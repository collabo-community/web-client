import { capitalizeAllFirstLetters, stringToUrlStart } from '@/apps/shared/helpers/transform';
import  { AppInfo } from '@/apps/shared/helpers/types';

const appName = 'collabo community';

const urlStart = stringToUrlStart(appName.replace('collabo ', ''));

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
