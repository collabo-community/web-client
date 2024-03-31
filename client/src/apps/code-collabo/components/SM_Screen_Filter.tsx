import React from 'react';

import useToggle from '../hooks/useToggle';

import SM_Screen_FiltersSideBarComponent from './SM_Screen_FiltersSideBar';
import SM_Screen_FilterHamburgerComponent from './SM_Screen_FilterHamburger';

export default function SM_Screen_FilterComponent({ pathname }: { pathname: string; }) {
  const { toggleFilter, isFilterOpen } = useToggle();

  const isProjectPage: boolean = pathname.includes('projects');

  // Display mobile filter components only when on project page
  if (isProjectPage) {
    return (
      <>
        <SM_Screen_FilterHamburgerComponent toggleFilter={toggleFilter} />
        <SM_Screen_FiltersSideBarComponent
          isFilterOpen={isFilterOpen}
          toggleFilter={toggleFilter}
        />
      </>
    );
  }

  // Don't display or show in DOM on other pages
  return null;
}
