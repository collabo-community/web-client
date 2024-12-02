import React from 'react';
import Sidebar from './Sidebar';
import Overlay from './Overlay';

interface SidebarWithOverlayProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  is_sm_screen: boolean;
}

const SidebarWithOverlay: React.FC<SidebarWithOverlayProps> = ({
  isOpen,
  toggleSidebar,
  is_sm_screen,
}) => {
  return (
    <>
      <Overlay
        is_sm_screen={is_sm_screen}
        isSidebarOpen={isOpen}
        toggle={toggleSidebar}
      />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default SidebarWithOverlay;
