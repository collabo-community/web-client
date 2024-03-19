import { useState } from 'react';

export default function useToggle() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return {
    isSidebarOpen,
    toggleSidebar,
    isFilterOpen,
    toggleFilter
  };
}
