import { NextPageWithLayout } from '@/pages/_app';
import { getLayout_App } from '@/@layout_app/App_Layout';

import overview from '@/@layout_app/styles/overview.module.css';

const OverviewPage_App: NextPageWithLayout = () => {
  return (
    <div className={`${overview.test} dummy-module-text`}>Page content area</div>
  );
};

OverviewPage_App.getLayout = getLayout_App;
export default OverviewPage_App;
