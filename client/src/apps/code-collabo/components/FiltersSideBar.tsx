import React from 'react';
import useScreenDimensions from '../hooks/useScreenDimensions';
import FiltersComponent from './Filters';

import FilterHamburgerToggleBtnComponent from './FilterHamburgerToggleBtn';

export default function FiltersSideBarComponent({ isFilterOpen, toggleFilter }: { isFilterOpen: boolean; toggleFilter?: () => void  }) {
  const  { isMobile }  = useScreenDimensions();
  const isMobileFilterSidebarToggleTrue = isMobile && isFilterOpen;

  // Filter sidebar should show and open for mobile when filter is open
  if (isMobileFilterSidebarToggleTrue) {
    return (
      <>
        <div className='app__menubar__nav lib__position-right'>
          <FilterHamburgerToggleBtnComponent
            isCloseBtn={true}
            toggleFilter={toggleFilter}
          />
          <div className='app__menubar__nav__items lib__flex-space-btw-col'>
            <FiltersComponent />
          </div>
        </div>
      </>
    );
  }

  // Otherwise, don't display or show in DOM
  return null;
}
