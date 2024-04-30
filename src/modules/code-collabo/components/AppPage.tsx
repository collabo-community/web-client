import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/modules/shared/helpers/meta';
import { appInfo, urlStart } from '@/modules/code-collabo/helpers/appInfo';

import PageHeadElement from '@/modules/shared/components/PageHeadElement';

import { colors, spacing, types } from '@/modules/code-collabo/styles/app.imports';
import main from '@/modules/code-collabo/styles/app.main';
import lib from '@/modules/code-collabo/styles/app.lib';

import useToggle from '../hooks/useToggle';

import SM_Screen_HamburgerComponent from './SM_Screen_Hamburger';
import SM_Screen_FilterComponent from './SM_Screen_Filter';
import { MidAndUp_Screens_SideBarComponent, SM_Screen_SideBarComponent } from './SideBar';


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

      {/* Global JSX styles for Code Collabo sub-community only */}
      <style jsx global>{ colors }</style>
      <style jsx global>{ spacing }</style>
      <style jsx global>{ types }</style>
      <style jsx global>{ lib }</style>
      <style jsx global>{ main }</style>

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
