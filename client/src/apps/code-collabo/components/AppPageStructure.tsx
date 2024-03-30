import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/apps/shared/helpers/meta';
import { appInfo, urlStart } from '@/apps/code-collabo/helpers/appInfo';

import PageHeadElement from '@/apps/shared/components/PageHeadElement';
import projects from '@/apps/code-collabo/styles/modules/projects.module.css';

import { colors, spacing, types } from '@/apps/code-collabo/styles/app.imports';
import main from '@/apps/code-collabo/styles/app.main';
import lib from '@/apps/code-collabo/styles/app.lib';
import  useScreenDimensions  from '../hooks/useScreenDimensions';
import Image from 'next/image';
import useToggle from '../hooks/useToggle';
import FiltersComponent from './Filters';
import SideBarComponent from './SideBar';
import HamburgerToggleBtnComponent from './HamburgerToggleBtn';


export default function PageStructure({ children }: { children: ReactNode }) {
  let { pathname } = useRouter();
  pathname === urlStart ? pathname =  `${urlStart}/overview` : pathname;
  const { thisPage, pageTitle } = getPage(pathname, urlStart, appInfo.name);

  const  { isMobile, isDesktop }  = useScreenDimensions();
  const { isSidebarOpen, toggleSidebar, toggleFilter, isFilterOpen } = useToggle();

  // Used to show or hide sidebar (only on mobile)
  const isMobileSidebarToggleTrue = isMobile && isSidebarOpen;

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
          { isMobile && (
            <button className='app__mobile-menu-btns' onClick={toggleFilter}>
              <Image src='/code-collabo/menu.png' alt='hamburger-icon' width={25} height={25}/>
            </button>
          )}
        </header>

        {/* TODO: Make a filters component - inject one here, and one inside projects page */}
        { isFilterOpen && isMobile && (
          <div className='app__project-filter-container open'>
            <div className='lib__flex-center-col app__project-filter'>
              <FiltersComponent className={projects.selectElemMobile} isFilterOpen={isFilterOpen} toggleFilter={toggleFilter}/>
            </div>
          </div>
        )
        }
        <main>
          { children }
        </main>
      </div>
    </>
  );
}
