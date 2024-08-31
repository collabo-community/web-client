import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import PageLayout from '@/@bbm_shared/components/PageLayout';

import PageStructure_Community from '@/@bbm_community/Community_Page';
import PageStructure_App from '@/@bbm_app/App_Page';

import Community_404Component from '@/@bbm_community/components/404';
import App_404Component from '@/@bbm_app/components/404';

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
        <PageStructure_App>
          {page}
          <App_404Component></App_404Component>
        </PageStructure_App>
      </PageLayout>
    );
  }

  // By default: Return Community 404 layout and content
  return (
    <PageLayout>
      <PageStructure_Community>
        {page}
        <Community_404Component></Community_404Component>
      </PageStructure_Community>
    </PageLayout>
  );
}
