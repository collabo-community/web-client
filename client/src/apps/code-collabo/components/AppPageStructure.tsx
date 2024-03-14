import { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/apps/shared/helpers/meta';
import { appInfo, urlStart } from '@/apps/code-collabo/helpers/appInfo';

import PageHeadElement from '@/apps/shared/components/PageHeadElement';

import { colors, spacing, types } from '@/apps/code-collabo/styles/app.imports';
import main from '@/apps/code-collabo/styles/app.main';
import lib from '@/apps/code-collabo/styles/app.lib';
import  useScreenDimensions  from '../hooks/useScreenDimensions';
import Image from 'next/image';
import Link from 'next/link';
import useToggle from '../hooks/useToggle';


export default function PageStructure({ children }: { children: ReactNode }) {
  let { pathname } = useRouter();
  pathname === urlStart ? pathname =  `${urlStart}/overview` : pathname;
  const { thisPage, pageTitle } = getPage(pathname, urlStart, appInfo.name);

  const  { isMobile }  = useScreenDimensions();
  const { isOpen, toggle } = useToggle(true);

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

      {/* TODO: Convert sidebar into a component - inject one here, and one after 1st button in header */}
      {/* Sidebar for Desktop & left side menu for mobile */}
      <div className={`app__menubar__nav lib__flex-center-col ${isMobile ? 'app__menubar__nav__mobile' : ''} ${isOpen ? 'open' : ''}`}>
        <Link className='app__logo' onClick={toggle} href='/code-collabo'>
          {isMobile && <div >X</div>}
          <Image src='/code-collabo/logo.png' alt='logo' width={207} height={55} />
        </Link>
        <nav className='app__menubar__nav__items lib__flex-space-btw-col'>
          <Link className='app__menubar__nav__link lib__flex-center' onClick={toggle} href='/code-collabo'>
            <Image src='/code-collabo/dashboard.png' alt='donate-icon' width='17' height='15' />
            Overview
          </Link>
          <Link className='app__menubar__nav__link lib__flex-center' onClick={toggle} href='/code-collabo/projects'>
            <Image src='/code-collabo/project-icon.png' alt='project-icon' width='17' height='15' />
            Projects
          </Link>
          <Link className='app__menubar__nav__link lib__flex-center' onClick={toggle} href='/code-collabo/careers'>
            <Image src='/code-collabo/career-icon.png' alt='career-icon' width='17' height='15' />
            Careers
          </Link>
          <Link className='app__menubar__nav__link lib__flex-center' onClick={toggle} href='/code-collabo/donate'>
            <Image src='/code-collabo/donate.png' alt='donate-icon' width='17' height='15' />
            Donate
          </Link>
        </nav>
      </div>

      {/* Page Content area for Desktop & Whole page for mobile */}
      <div  className='app__content-area'>
        <header className='app__header lib__flex-space-btw__sm'>
          { isMobile && (
            <button className='app__mobile-menu-btns' onClick={toggle}>
              <Image src='/code-collabo/hamburger.png' alt='hamburger-icon' width={25} height={25}/>
            </button>
          )}
          <h2 className='app__page-title'>{thisPage}</h2>
          { isMobile && (
            <button className='app__mobile-menu-btns'>
              <Image src='/code-collabo/menu.png' alt='hamburger-icon' width={25} height={25}/>
            </button>
          )}
        </header>

        {/* TODO: Make a filters component - inject one here, and one inside projects page */}

        <main>
          { children }
        </main>
      </div>
    </>
  );
}
