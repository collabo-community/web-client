import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/@module_shared/helpers/meta';
import { appInfo, urlStart } from '@/@module_community/helpers/appInfo';

import PageHeadElement from '@/@module_shared/components/PageHeadElement';

export default function PageStructure_Community({ children }: { children: ReactNode}) {
  let { pathname } = useRouter();
  pathname === '/' || pathname === urlStart ? pathname = `${urlStart}/home` : pathname;
  const { thisPage, pageTitle } = getPage(pathname, urlStart, appInfo.name);
  return (
    <>
      <PageHeadElement
        pageTitle={pageTitle}
        faviconUrl=''
      />
      <header className='header-test'>
        <nav>
          <h1>{appInfo.name} App [{thisPage}]</h1>
        </nav>
      </header>
      { children }
    </>
  );
}