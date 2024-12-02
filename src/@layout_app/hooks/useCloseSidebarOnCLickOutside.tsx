import { useEffect } from 'react';

const useCloseSidebarOnClickOutside = (sidebarRef: React.RefObject<HTMLDivElement>, toggleSidebar?: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        toggleSidebar?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarRef, toggleSidebar]);
};

export default useCloseSidebarOnClickOutside;
