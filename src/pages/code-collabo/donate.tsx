import { NextPageWithLayout } from '@/pages/_app';
import { getCodeCollaboSubCommunityLayout } from '@/modules/code-collabo/components/AppLayout';

import donate from '@/modules/code-collabo/styles/modules/careers.module.css';

const DonatePageCodeCollabo: NextPageWithLayout = () => {
  return (
    <div className={donate.container}>Page content area</div>
  );
};

DonatePageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default DonatePageCodeCollabo;
