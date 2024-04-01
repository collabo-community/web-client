import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import PageLayout from '@/apps/shared/components/PageLayout';

import CommunityPageStructure from '@/apps/community/components/AppPageStructure';
import CodeCollaboPageStructure from '@/apps/code-collabo/components/AppPageStructure';

import Community404Component from '@/apps/community/components/404component';
import CodeCollabo404Component from '@/apps/code-collabo/components/404component';

import { useRouteraspath } from '@/apps/shared/hooks/useRouteraspath';

import { urlStart as firstSubAppUrlStart } from '@/apps/code-collabo/helpers/appInfo';

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
