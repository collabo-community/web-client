import { useEffect, useState } from 'react';

interface ScreenDimensions {
  is_sm_screen: boolean;
  is_midAndUp_screens: boolean;
  screenWidth: number;
}

// Custom hook for determining if the screen is sm_screen and returning screen width
const useScreenDimensions = (): ScreenDimensions => {
  const [screenDimensions, setScreenDimensions] = useState<ScreenDimensions>({
    is_sm_screen: false,
    is_midAndUp_screens: false,
    screenWidth:typeof window !== 'undefined' ? window.innerWidth : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      const sm_screen = newScreenWidth <= 600;
      setScreenDimensions({
        is_sm_screen: sm_screen,
        is_midAndUp_screens: !sm_screen,
        screenWidth: newScreenWidth,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenDimensions;
};

export default useScreenDimensions;
