import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/apps/shared/helpers/meta';
import { appInfo, urlStart } from '@/apps/community/helpers/appInfo';

import PageHeadElement from '@/apps/shared/components/PageHeadElement';

import { colors } from '@/apps/community/styles/app.imports';
import main from '@/apps/community/styles/app.main';

export default function PageStructure({ children }: { children: ReactNode}) {
  let { pathname } = useRouter();
  pathname === '/' || pathname === urlStart ? pathname = `${urlStart}/home` : pathname;
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

      <header className='header-test'>
        <nav>
          <h1>{appInfo.name} App [{thisPage}]</h1>
        </nav>
      </header>
      { children }
    </>
  );
}