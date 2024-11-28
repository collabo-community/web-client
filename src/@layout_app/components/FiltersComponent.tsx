import React from 'react';

import styles from '../styles/filter.module.css';
import useScreenDimensions from '@/@library_external/hooks/useScreenDimensions';

export default function FiltersComponent() {
  const  { is_sm_screen }  = useScreenDimensions();
  return (
    <div className={styles.filterContainer}>
      {/* TODO: We are constructing our own select element/library - the normal html select is generally hard to style or work with */}
      <span className={is_sm_screen ? styles.filterbyText : ''}>Filter By: </span>
      <div className={is_sm_screen ? styles.sideMenubarFilter : ''}>
        <select name='interest' className={styles.selectElem}>
          <option value="">Interest</option>
        </select>
        <select name='skill-set' className={styles.select_elem}>
          <option value="">Skill Set</option>
        </select>
      </div>
    </div>
  );
}
