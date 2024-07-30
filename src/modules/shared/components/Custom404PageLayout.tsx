import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import PageLayout from '@/modules/shared/components/PageLayout';

import AppHomePageStructure from '@/modules/app-home/components/AppPage';
import CodeCollaboPageStructure from '@/modules/code-collabo/components/AppPage';

import AppHome404Component from '@/modules/app-home/components/404';
import CodeCollabo404Component from '@/modules/code-collabo/components/404';

import { useRouteraspath } from '@/modules/shared/hooks/useRouteraspath';

import { urlStart as firstSubAppUrlStart } from '@/modules/code-collabo/helpers/appInfo';

export function GetCustom404Layout(page: ReactElement) {
  const router = useRouter();
  const { appRoute } = useRouteraspath({ router });
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';

  const urlStartIsAtIndexZero = (subAppUrlStart: string) => appRoute.indexOf(subAppUrlStart) === 0;
  const urlStartHasMoreTextAfterItAndHasNoSlashInbetween = (urlStartLength: number) => appRoute.length > urlStartLength && appRoute[urlStartLength] !== '/';

  const is = {
    firstApp404Route: urlStartIsAtIndexZero(firstSubAppUrlStart) && !urlStartHasMoreTextAfterItAndHasNoSlashInbetween(firstSubAppUrlStart.length),
  };

  // At initial point when appRoute is '': Prevent main app's layout flickering
  if (appRoute === '') {
    return null;
  }

  if (hostname === 'app.localhost') {
    if (is.firstApp404Route) {
      return (
        <PageLayout>
          <CodeCollaboPageStructure>
            {page}
            <CodeCollabo404Component></CodeCollabo404Component>
          </CodeCollaboPageStructure>
        </PageLayout>
      );
    } else {
      return (
        <PageLayout>
          <CodeCollaboPageStructure>
            {page}
            <CodeCollabo404Component></CodeCollabo404Component>
          </CodeCollaboPageStructure>
        </PageLayout>
      );
    }
  } 

  // By default: Return AppHome 404 layout and content
  return (
    <PageLayout>
      <AppHomePageStructure>
        {page}
        <AppHome404Component></AppHome404Component>
      </AppHomePageStructure>
    </PageLayout>
  );
}
