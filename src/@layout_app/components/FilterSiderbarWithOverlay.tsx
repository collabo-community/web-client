import React, { useRef } from 'react';
import Overlay from './Overlay';
import FiltersComponent from './FiltersComponent';
import SM_Screen_FilterHamburgerComponent from './SM_Screen_FilterHamburger';
import useCloseSidebarOnClickOutside from '../hooks/useCloseSidebarOnCLickOutside';
import useCloseSidebarOnTabOut from '../hooks/useCloseSidebarOnTabOut';

interface FilterSidebarWithOverlayProps {
  isOpen: boolean;
  toggleFilter: () => void;
  is_sm_screen: boolean;
  pathname: string;
}

const FilterSidebarWithOverlay: React.FC<FilterSidebarWithOverlayProps> = ({
  isOpen,
  toggleFilter,
  is_sm_screen,
  pathname
}) => {

  const isProjectPage: boolean = pathname.includes('projects');
  
  const sidebarRef = useRef<HTMLDivElement>(null);

  useCloseSidebarOnClickOutside(sidebarRef, toggleFilter);

  useCloseSidebarOnTabOut(!!toggleFilter, toggleFilter as () => void);

  return (
    <>
      <Overlay
        is_sm_screen={is_sm_screen}
        isSidebarOpen={isOpen}
        toggle={toggleFilter}
      />
      {isProjectPage && <SM_Screen_FilterHamburgerComponent toggleFilter={toggleFilter} />}
      {is_sm_screen && (
        <FiltersComponent isOpen={isOpen} toggleFilter={toggleFilter} />
      )}
    </>
  );
};

export default FilterSidebarWithOverlay;
