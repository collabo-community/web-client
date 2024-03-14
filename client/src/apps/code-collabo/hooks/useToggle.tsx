import { useState } from 'react';

export default function useToggle(initialState = true) {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggle
  };
}
