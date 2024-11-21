import { NextPageWithLayout } from '@/pages/_app';
import { getLayout_App } from '@/@layout_app/App_Layout';

const CareersPage_App: NextPageWithLayout = () => {
  return (
    <>
      {/* project page content was here */}
      <div>Career Page content area</div>
    </>
  );
};

CareersPage_App.getLayout = getLayout_App;
export default CareersPage_App;
