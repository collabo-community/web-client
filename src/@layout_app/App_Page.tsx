import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/@layout_shared/helpers/meta';
import { appInfo } from '@/@layout_app/helpers/appInfo';

import PageHeadElement from '@/@layout_shared/components/PageHeadElement';

import styles from './styles/app_page.module.css';
import Header from './components/Header';
import useToggle from '@/@library_external/hooks/useToggle';
import useScreenDimensions from '@/@library_external/hooks/useScreenDimensions';
import SM_Screen_HamburgerComponent from './components/SM_Screen_Hamburger';
import SidebarWithOverlay from './components/SidebarWithOverlay';
import FilterSidebarWithOverlay from './components/FilterSiderbarWithOverlay';


export default function PageStructure_App({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();
  const { pageTitle } = getPage({ pathname, layoutName: appInfo.name });

  const { toggleSidebar, isSidebarOpen, toggleFilter, isFilterOpen } = useToggle();
  const { is_sm_screen }  = useScreenDimensions();

  return (
    <>
      <PageHeadElement
        pageTitle={pageTitle}
        faviconUrl='/@images_app/favicon.ico'
      />

      <div className={styles.layout}>
        <SidebarWithOverlay
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          is_sm_screen={is_sm_screen}
        />
        <div className={styles.appContainer}>
          <div  className={styles.mainContent}>
            <div className={styles.app_header}>
              <SM_Screen_HamburgerComponent
                toggleSidebar={toggleSidebar}
              />
              <Header />
              <FilterSidebarWithOverlay
                pathname={pathname}
                isOpen={isFilterOpen}
                toggleFilter={toggleFilter}
                is_sm_screen={is_sm_screen}
              />
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
