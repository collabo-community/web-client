import React from 'react';
import useScreenDimensions from '../hooks/useScreenDimensions';
import FiltersComponent from './Filters';

import FilterHamburgerToggleBtnComponent from './FilterHamburgerToggleBtn';

export default function FiltersSideBarComponent({ toggleFilter }: { toggleFilter?: () => void  }) {
  const  { isDesktop }  = useScreenDimensions();

  if (isDesktop) return null;

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
