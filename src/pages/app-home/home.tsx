import { NextPageWithLayout } from '@/pages/_app';
import { getCommunityLayout } from '@/modules/app-home/components/AppLayout';

import home from '@/modules/app-home/styles/modules/home.module.css';

const AppHomePage: NextPageWithLayout = () => {
  return (
    <>
      <p className={home.test}>Dummy Page Content: CSS Module Test!</p>
    </>
  );
};

AppHomePage.getLayout = getCommunityLayout;
export default AppHomePage;
