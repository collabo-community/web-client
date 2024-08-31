import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/@layout_shared/helpers/meta';
import { appInfo } from '@/@layout_app/helpers/appInfo';

import PageHeadElement from '@/@layout_shared/components/PageHeadElement';

import useToggle from '@/@library_external/hooks/useToggle';

import SM_Screen_HamburgerComponent from './components/SM_Screen_Hamburger';
import SM_Screen_FilterComponent from './components/SM_Screen_Filter';
import { MidAndUp_Screens_SideBarComponent, SM_Screen_SideBarComponent } from './components/SideBar';


export default function PageStructure_App({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();
  const { thisPage, pageTitle } = getPage({ pathname, layoutName: appInfo.name });

  const { toggleSidebar, isSidebarOpen } = useToggle();

  return (
    <>
      <PageHeadElement
        pageTitle={pageTitle}
        faviconUrl='/@images_app/favicon.ico'
      />

      {/* MidAndUp-screens Sidebar */}
      <MidAndUp_Screens_SideBarComponent />

      {/* Page Content area for MidAndUp-screens, but is whole page for SM-screen-devices */}
      <div  className='app__content-area'>
        <header className='app__header lib__flex-space-btw__sm'>
          <SM_Screen_HamburgerComponent
            toggleSidebar={toggleSidebar}
          />
          <SM_Screen_SideBarComponent
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          <h2 className='app__page-title'>{thisPage}</h2>
          <SM_Screen_FilterComponent pathname={pathname}/>
        </header>
        <main>
          { children }
        </main>
      </div>
    </>
  );
}
