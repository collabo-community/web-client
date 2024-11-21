import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/@layout_shared/helpers/meta';
import { appInfo } from '@/@layout_app/helpers/appInfo';

import PageHeadElement from '@/@layout_shared/components/PageHeadElement';

import styles from './styles/app_page.module.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';


export default function PageStructure_App({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();
  const { pageTitle } = getPage({ pathname, layoutName: appInfo.name });

  return (
    <>
      <PageHeadElement
        pageTitle={pageTitle}
        faviconUrl='/@images_app/favicon.ico'
      />

      <div className={styles.layout}>
        <Sidebar />
        <div className={styles.appContainer}>
          <div  className={styles.mainContent}>
            <Header />
            <main className={styles.main}>
              { children }
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
