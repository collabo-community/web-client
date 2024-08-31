import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/@bbm_shared/helpers/meta';
import { appInfo, urlStart } from '@/@bbm_app/helpers/appInfo';

import PageHeadElement from '@/@bbm_shared/components/PageHeadElement';

import useToggle from '@/@bbm_library/hooks/useToggle';

import SM_Screen_HamburgerComponent from './components/SM_Screen_Hamburger';
import SM_Screen_FilterComponent from './components/SM_Screen_Filter';
import { MidAndUp_Screens_SideBarComponent, SM_Screen_SideBarComponent } from './components/SideBar';


export default function PageStructure({ children }: { children: ReactNode }) {
  let { pathname } = useRouter();
  pathname === urlStart ? pathname =  `${urlStart}/overview` : pathname;
  const { thisPage, pageTitle } = getPage(pathname, urlStart, appInfo.name);

  const { toggleSidebar, isSidebarOpen } = useToggle();

  return (
    <>
      <PageHeadElement
        pageTitle={pageTitle}
        faviconUrl='/code-collabo/favicon.ico'
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
