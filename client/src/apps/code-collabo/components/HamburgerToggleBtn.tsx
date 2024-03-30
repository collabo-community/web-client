import React from 'react';
import useScreenDimensions from '../hooks/useScreenDimensions';
import Image from 'next/image';

export default function HamburgerToggleBtnComponent({ toggleSidebar, isSidebarOpen, onlyShowInDOMwhenSideBarClosed }: { toggleSidebar?: () => void; isSidebarOpen?: boolean; onlyShowInDOMwhenSideBarClosed?: boolean }) {
  const  { isDesktop }  = useScreenDimensions();
  
  // Remove from DOM if desktop, also remove duplicate for smaller devices when side bar is open
  if (isDesktop || onlyShowInDOMwhenSideBarClosed) return null;

  return (
    <button className={!isSidebarOpen ? 'app__mobile-menu-btns': 'app__menubar__toggle__close'} onClick={toggleSidebar}>
      {!isSidebarOpen && <Image src='/code-collabo/hamburger.png' alt='hamburger-icon' width={25} height={25}/>}
      {isSidebarOpen && '<'}
    </button>
  );
}
