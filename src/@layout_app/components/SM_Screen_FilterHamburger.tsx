import React from 'react';
import Image from 'next/image';
import useScreenDimensions from '@/@library_external/hooks/useScreenDimensions';

import styles from '../styles/app_page.module.css';
import sidefilterstyle from '../styles/filter.module.css';

export default function SM_Screen_FilterHamburgerComponent({ toggleFilter, isCloseBtn }: { toggleFilter?: () => void; isCloseBtn?: boolean; }) {
  const  { is_midAndUp_screens }  = useScreenDimensions();
  
  // Remove from DOM if on MidAndUp-screens
  if (is_midAndUp_screens) return null;

  // We want to keep the "open" harmburger button in the DOM always, to keep the shape of the page whether sidebar is open or not
  // The "isCloseBtn" prop/style for singling out close button helps achieve this
  if (isCloseBtn) {
    return (
      <button className={sidefilterstyle.sidebar_toggleclose} onClick={toggleFilter}>
        <Image src='/@images_app/filter-back.svg' alt='filterback-icon' width={56} height={56}/>
      </button>
    );
  }

  return (
    <button className={styles.app__mobileMenuBtns} onClick={toggleFilter}>
      <Image src='/@images_app/menu.png' alt='hamburger-icon' width={25} height={25}/>
    </button>
  );
}
