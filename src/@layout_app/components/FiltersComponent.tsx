import React from 'react';

import styles from '../styles/filter.module.css';
import useScreenDimensions from '@/@library_external/hooks/useScreenDimensions';
import SM_Screen_FilterHamburgerComponent from './SM_Screen_FilterHamburger';

export default function FiltersComponent({ isOpen, toggleFilter }: { isOpen: boolean, toggleFilter?: () => void }) {
  const  { is_sm_screen }  = useScreenDimensions();
  return (
    <div className={`${styles.filterContainer} ${isOpen ? styles.filterOpen : ''}`}>
      {/* TODO: We are constructing our own select element/library - the normal html select is generally hard to style or work with */}
      <div className={is_sm_screen ? styles.filterbyText : ''}>
        <SM_Screen_FilterHamburgerComponent isCloseBtn={true} toggleFilter={toggleFilter} />
        <span>Filter By: </span>
      </div>
      <div className={is_sm_screen ? styles.sideMenubarFilter : ''}>
        <select name='interest' className={styles.selectElem}>
          <option value="">Interest</option>
        </select>
        <select name='skill-set' className={styles.selectElem}>
          <option value="">Skill Set</option>
        </select>
      </div>
    </div>
  );
}
