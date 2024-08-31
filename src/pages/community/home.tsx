import { NextPageWithLayout } from '@/pages/_app';
import { getLayout_Community } from '@/@layout_community/Community_Layout';

import home from '@/@layout_community/styles/home.module.css';

const HomePage_Community: NextPageWithLayout = () => {
  return (
    <>
      <p className={home.test}>Dummy Page Content: CSS Module Test!</p>
    </>
  );
};

HomePage_Community.getLayout = getLayout_Community;
export default HomePage_Community;
