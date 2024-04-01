import { NextPageWithLayout } from '@/pages/_app';
import { getCodeCollaboSubCommunityLayout } from '@/modules/code-collabo/components/AppLayout';

import overview from '@/modules/code-collabo/styles/modules/overview.module.css';

const OverviewPageCodeCollabo: NextPageWithLayout = () => {
  return (
    <div className={`${overview.test} dummy-module-text`}>Page content area</div>
  );
};

OverviewPageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default OverviewPageCodeCollabo;
