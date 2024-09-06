import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/@layout_shared/helpers/meta';
import { appInfo } from '@/@layout_community/helpers/appInfo';

import PageHeadElement from '@/@layout_shared/components/PageHeadElement';

export default function PageStructure_Community({ children }: { children: ReactNode}) {
  const { pathname } = useRouter();
  const { thisPage, pageTitle } = getPage({ pathname, layoutName: appInfo.name });
  return (
    <>
      <PageHeadElement
        pageTitle={pageTitle}
        faviconUrl='/@images_community/favicon.ico'
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