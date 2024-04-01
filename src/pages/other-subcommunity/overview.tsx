import { NextPageWithLayout } from '@/pages/_app';
import { getOtherSubCommunityLayout } from '@/apps/other-subcommunity/components/AppPageLayout';

import overview from '@/apps/other-subcommunity/styles/modules/overview.module.css';

const OverviewPageOther: NextPageWithLayout = () => {
  return (
    <>
      <p className={`${overview.test}`}>Dummy Page Content: CSS Module Test!</p>
    </>
  );
};

OverviewPageOther.getLayout = getOtherSubCommunityLayout;
export default OverviewPageOther;
