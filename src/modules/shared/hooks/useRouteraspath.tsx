import { NextRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useRouteraspath = ({ router }: { router: NextRouter }) => {
  const [appRoute, setAppRoute] = useState<string>(''); // Initial point where appRoute is ''

  useEffect(() => {
    setAppRoute(router.asPath);
  }, [router]);

  return {
    appRoute,
  };
};
