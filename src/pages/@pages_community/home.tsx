import { NextPageWithLayout } from '@/pages/_app';
import { getLayout_Community } from '@/@layout_community/Community_Layout';

const HomePage_Community: NextPageWithLayout = () => {
  return (
    <>
      <p>Dummy Page Content: CSS Module Test!</p>
    </>
  );
};

HomePage_Community.getLayout = getLayout_Community;
export default HomePage_Community;
