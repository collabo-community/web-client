import React from 'react';
import useScreenDimensions from '../hooks/useScreenDimensions';
import FiltersComponent from './Filters';
import Overlay from './Overlay';

import SM_Screen_FilterHamburgerComponent from './SM_Screen_FilterHamburger';

export default function SM_Screen_FiltersSideBarComponent({ isFilterOpen, toggleFilter }: { isFilterOpen: boolean; toggleFilter?: () => void  }) {
  const  { is_sm_screen }  = useScreenDimensions();
  const is_SM_Screen_FilterSidebarToggleTrue = is_sm_screen && isFilterOpen;

  // Filter sidebar should show and open for SM-screen-devices when filter is open
  if (is_SM_Screen_FilterSidebarToggleTrue) {
    return (
      <>
        <Overlay toggle={toggleFilter} />
        <div className='app__side-menubar lib__position-right'>
          <SM_Screen_FilterHamburgerComponent
            isCloseBtn={true}
            toggleFilter={toggleFilter}
          />
          <FiltersComponent />
        </div>
      </>
    );
  }

  // Otherwise, don't display or show in DOM
  return null;
}
