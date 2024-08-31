import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import PageLayout from '@/@bbm_shared/components/PageLayout';

import AppHomePageStructure from '@/@bbm_community/AppPage';
import CodeCollaboPageStructure from '@/@bbm_app/AppPage';

import AppHome404Component from '@/@bbm_community/components/404';
import CodeCollabo404Component from '@/@bbm_app/components/404';

import { useRouteraspath } from '@/@bbm_shared/hooks/useRouteraspath';

export function GetCustom404Layout(page: ReactElement) {
  const router = useRouter();
  const { appRoute } = useRouteraspath({ router });
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';

  const is = {
    firstApp404Route: hostname === 'app.localhost',
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
