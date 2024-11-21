import { NextPageWithLayout } from '@/pages/_app';
import { getLayout_App } from '@/@layout_app/App_Layout';

const DonatePage_App: NextPageWithLayout = () => {
  return (
    <>
      {/* project page content was here */}
      <div>Donate Page content area</div>
    </>
  );
};

DonatePage_App.getLayout = getLayout_App;
export default DonatePage_App;
