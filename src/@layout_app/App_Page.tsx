import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/@layout_shared/helpers/meta';
import { appInfo } from '@/@layout_app/helpers/appInfo';

import PageHeadElement from '@/@layout_shared/components/PageHeadElement';

import styles from './styles/app_page.module.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Image from 'next/image';
import useToggle from '@/@library_external/hooks/useToggle';
import useScreenDimensions from '@/@library_external/hooks/useScreenDimensions';
import Overlay from './components/Overlay';


export default function PageStructure_App({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();
  const { pageTitle } = getPage({ pathname, layoutName: appInfo.name });

  const { toggleSidebar, isSidebarOpen } = useToggle();
  const { is_sm_screen }  = useScreenDimensions();

  return (
    <>
      <PageHeadElement
        pageTitle={pageTitle}
        faviconUrl='/@images_app/favicon.ico'
      />

      <div className={styles.layout}>
        <Overlay is_sm_screen={is_sm_screen}  isSidebarOpen={isSidebarOpen} toggle={toggleSidebar}/>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={styles.appContainer}>
          <div  className={styles.mainContent}>
            <div className={styles.app_header}>
              <button className={styles.app__mobileMenuBtns} onClick={toggleSidebar}>
                <Image src='/@images_app/hamburger.png' alt='hamburger-icon' width={25} height={25}/>
              </button>
              <Header />
              <button className={styles.app__mobileMenuBtns}>
                <Image src='/@images_app/menu.png' alt='hamburger-icon' width={25} height={25}/>
              </button>
            </div>
            <main className={styles.main}>
              { children }
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
