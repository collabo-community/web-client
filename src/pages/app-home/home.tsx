import { NextPageWithLayout } from '@/pages/_app';
import { getAppHomeLayout } from '@/@bbm_community/AppLayout';

import home from '@/@bbm_community/styles/home.module.css';

const AppHomePage: NextPageWithLayout = () => {
  return (
    <>
      <p className={home.test}>Dummy Page Content: CSS Module Test!</p>
    </>
  );
};

AppHomePage.getLayout = getAppHomeLayout;
export default AppHomePage;
