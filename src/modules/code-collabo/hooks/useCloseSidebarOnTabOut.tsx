import { useEffect, useRef } from 'react';

const useCloseSidebarOnTabOut = (isOpen: boolean, toggleSidebar: () => void) => {
  const lastFocusableElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Tab') {
        const sidebar = document.querySelector('.app__side-menubar');
        const focusableElements = sidebar?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements) {
          const firstFocusableElement = focusableElements[0] as HTMLElement;
          const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          if (event.shiftKey && document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
          } else if (!event.shiftKey && document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            toggleSidebar();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, toggleSidebar]);

  return lastFocusableElementRef;
};

export default useCloseSidebarOnTabOut;
