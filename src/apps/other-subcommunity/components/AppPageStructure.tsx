import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/apps/shared/helpers/meta';
import { appInfo, urlStart } from '@/apps/other-subcommunity/helpers/appInfo';

import PageHeadElement from '@/apps/shared/components/PageHeadElement';

import { colors } from '@/apps/other-subcommunity/styles/app.imports';
import main from '@/apps/other-subcommunity/styles/app.main';

export default function PageStructure({ children }: { children: ReactNode}) {
  let { pathname } = useRouter();
  pathname === urlStart ? pathname =  `${urlStart}/overview` : pathname;
  const { thisPage, pageTitle } = getPage(pathname, urlStart, appInfo.name);
  return (
    <>
      <PageHeadElement
        pageTitle={pageTitle}
        faviconUrl=''
      />

      {/* Global JSX styles for Code Collabo sub-community only */}
      <style jsx global>{ colors }</style>
      <style jsx global>{ main }</style>

      <header>
        <nav>
          <h1 className='test-h1-header'>{appInfo.name} [{thisPage}]</h1>
        </nav>
      </header>
      { children }
    </>
  );
}
