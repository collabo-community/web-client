import { NextPageWithLayout } from '@/pages/_app';
import { getCodeCollaboSubCommunityLayout } from '@/apps/code-collabo/components/AppPageLayout';

import careers from '@/apps/code-collabo/styles/modules/careers.module.css';

const CareersPageCodeCollabo: NextPageWithLayout = () => {
  return (
    <div className={careers.container}>Page content area</div>
  );
};

CareersPageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default CareersPageCodeCollabo;
