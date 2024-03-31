import React from 'react';

import useToggle from '../hooks/useToggle';

import FiltersSideBarComponent from './FiltersSideBar';
import FilterHamburgerToggleBtnComponent from './FilterHamburgerToggleBtn';

export default function MobileFilterComponent({ pathname }: { pathname: string; }) {
  const { toggleFilter, isFilterOpen } = useToggle();

  const isProjectPage: boolean = pathname.includes('projects');

  // Display mobile filter components only when on project page
  if (isProjectPage) {
    return (
      <>
        <FilterHamburgerToggleBtnComponent toggleFilter={toggleFilter} />
        <FiltersSideBarComponent
          isFilterOpen={isFilterOpen}
          toggleFilter={toggleFilter}
        />
      </>
    );
  }

  // Don't display or show in DOM on other pages
  return null;
}
