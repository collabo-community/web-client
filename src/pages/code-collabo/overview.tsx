import { NextPageWithLayout } from '@/pages/_app';
import { getCodeCollaboSubCommunityLayout } from '@/@bbm_app/components/AppLayout';

import overview from '@/@bbm_app/styles/overview.module.css';

const OverviewPageCodeCollabo: NextPageWithLayout = () => {
  return (
    <div className={`${overview.test} dummy-module-text`}>Page content area</div>
  );
};

OverviewPageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default OverviewPageCodeCollabo;
