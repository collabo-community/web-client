import { NextPageWithLayout } from '@/pages/_app';
import { getCodeCollaboSubCommunityLayout } from '@/apps/code-collabo/components/AppPageLayout';

import overview from '@/apps/code-collabo/styles/modules/overview.module.css';

const OverviewPageCodeCollabo: NextPageWithLayout = () => {
  return (
    <div className={`${overview.test} dummy-module-text`}>Page content area</div>
  );
};

OverviewPageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default OverviewPageCodeCollabo;
