import { NextPageWithLayout } from '@/pages/_app';
import { getLayout_App } from '@/@layout_app/App_Layout';

const OverviewPage_App: NextPageWithLayout = () => {
  return (
    <div>Overview Page content area</div>
  );
};

OverviewPage_App.getLayout = getLayout_App;
export default OverviewPage_App;
