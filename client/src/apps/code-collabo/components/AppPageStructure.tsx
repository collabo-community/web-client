import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/apps/shared/helpers/meta';
import { appInfo, urlStart } from '@/apps/code-collabo/helpers/appInfo';

import PageHeadElement from '@/apps/shared/components/PageHeadElement';

import { colors, spacing, types } from '@/apps/code-collabo/styles/app.imports';
import main from '@/apps/code-collabo/styles/app.main';
import lib from '@/apps/code-collabo/styles/app.lib';
import  useScreenDimensions  from '../hooks/useScreenDimensions';
import useToggle from '../hooks/useToggle';
import SideBarComponent from './SideBar';
import HamburgerToggleBtnComponent from './HamburgerToggleBtn';
import FiltersSideBarComponent from './FiltersSideBar';
import FilterHamburgerToggleBtnComponent from './FilterHamburgerToggleBtn';


export default function PageStructure({ children }: { children: ReactNode }) {
  let { pathname } = useRouter();
  pathname === urlStart ? pathname =  `${urlStart}/overview` : pathname;
  const { thisPage, pageTitle } = getPage(pathname, urlStart, appInfo.name);

  // Is there any other way we can get to check projects page???
  const isProjectPage = pathname.includes('projects');

  const  { isMobile, isDesktop }  = useScreenDimensions();
  const { isSidebarOpen, toggleSidebar, toggleFilter, isFilterOpen } = useToggle();

  // Used to show or hide sidebar (only on mobile)
  const isMobileSidebarToggleTrue = isMobile && isSidebarOpen;
  const isMobileFilterSidebarToggleTrue = isMobile && isFilterOpen;

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

      {/* Large devices - sidebar */}
      { isDesktop &&
        <SideBarComponent toggleSidebar={toggleSidebar}/>
      }

      {/* Page Content area for Desktop & Whole page for mobile */}
      <div  className='app__content-area'>
        <header className='app__header lib__flex-space-btw__sm'>
          {/* TODO: state management [to prevent nesting/repetition of props too] */}
          <HamburgerToggleBtnComponent
            toggleSidebar={toggleSidebar}
          />
          {/* Smaller devices - sidebar */}
          { isMobileSidebarToggleTrue &&
            <SideBarComponent toggleSidebar={toggleSidebar}/>
          }
          <h2 className='app__page-title'>{thisPage}</h2>

          {/* Reminder to have a "Mobile Filter" component later, where you can return it or not if isProjectPage */}
          {isProjectPage &&
            <>
              <FilterHamburgerToggleBtnComponent toggleFilter={toggleFilter} />

              { isMobileFilterSidebarToggleTrue && (
                <FiltersSideBarComponent
                  toggleFilter={toggleFilter}
                />
              )
              }
            </>
          }
        </header>
        <main>
          { children }
        </main>
      </div>
    </>
  );
}
