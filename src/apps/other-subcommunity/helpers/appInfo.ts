import { capitalizeAllFirstLetters, stringToUrlStart } from '@/apps/shared/helpers/transform';
import  { AppInfo } from '@/apps/shared/helpers/types';

const appName = 'other subcommunity';

const urlStart = stringToUrlStart(appName);

const page: { [key: number]: string } = {
  1: 'overview',
};

const appInfo: AppInfo = {
  id: 1,
  name: capitalizeAllFirstLetters(appName),
  pages: {
    1: {
      name: page[1],
      route: `${urlStart}/${page[1]}`,
    },
  }
};

export {
  appInfo,
  urlStart,
};
