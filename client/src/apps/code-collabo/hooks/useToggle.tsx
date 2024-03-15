import { useState } from 'react';

export default function useToggle() {
  const [isOpen, setIsOpen] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return {
    isOpen,
    toggle,
    isFilterOpen,
    toggleFilter
  };
}
