import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import PageLayout from '@/modules/shared/components/PageLayout';

import CommunityPageStructure from '@/modules/home/components/AppPageStructure';
import CodeCollaboPageStructure from '@/modules/code-collabo/components/AppPageStructure';

import Community404Component from '@/modules/home/components/404component';
import CodeCollabo404Component from '@/modules/code-collabo/components/404component';

import { useRouteraspath } from '@/modules/shared/hooks/useRouteraspath';

import { urlStart as firstSubAppUrlStart } from '@/modules/code-collabo/helpers/appInfo';

export function GetCustom404Layout(page: ReactElement) {
  const router = useRouter();
  const { appRoute } = useRouteraspath({ router });

  const urlStartIsAtIndexZero = (subAppUrlStart: string) => appRoute.indexOf(subAppUrlStart) === 0;
  // e.g. '/code-collaboproco' should not be recognised as a 404 route for /code-collabo app even though first part of the string matches the route
  const urlStartHasMoreTextAfterItAndHasNoSlashInbetween = (urlStartLength: number) => appRoute.length > urlStartLength && appRoute[urlStartLength] !== '/';
  
  const is = {
    firstApp404Route: urlStartIsAtIndexZero(firstSubAppUrlStart) && !urlStartHasMoreTextAfterItAndHasNoSlashInbetween(firstSubAppUrlStart.length),
  };

  // At initial point when appRoute is '': Prevent main app's layout flickering
  if (appRoute === '') {
    return null;
  }

  // When in 1st subcommunity route, return this 404 layout and content
  if (is.firstApp404Route) {
    return (
      <PageLayout>
        <CodeCollaboPageStructure>
          {page}
          <CodeCollabo404Component></CodeCollabo404Component>
        </CodeCollaboPageStructure>
      </PageLayout>
    );
  }

  // By default: Return Community 404 layout and content
  return (
    <PageLayout>
      <CommunityPageStructure>
        {page}
        <Community404Component></Community404Component>
      </CommunityPageStructure>
    </PageLayout>
  );
}
