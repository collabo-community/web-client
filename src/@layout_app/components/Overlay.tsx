import React from 'react';

import styles from '../styles/app_page.module.css';

const Overlay = ({toggle, is_sm_screen, isSidebarOpen}:{toggle?: () => void, is_sm_screen: boolean, isSidebarOpen: boolean}) => {
  return (
    <>
      {is_sm_screen && isSidebarOpen && <div className={styles.app__menuOverlay} onClick={toggle}></div>}
    </>
  );
};

export default Overlay;