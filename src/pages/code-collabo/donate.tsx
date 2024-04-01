import { NextPageWithLayout } from '@/pages/_app';
import { getCodeCollaboSubCommunityLayout } from '@/apps/code-collabo/components/AppPageLayout';

import donate from '@/apps/code-collabo/styles/modules/careers.module.css';

const DonatePageCodeCollabo: NextPageWithLayout = () => {
  return (
    <div className={donate.container}>Page content area</div>
  );
};

DonatePageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default DonatePageCodeCollabo;
