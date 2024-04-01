import { NextPageWithLayout } from '@/pages/_app';
import { getCodeCollaboSubCommunityLayout } from '@/modules/code-collabo/components/AppLayout';

import careers from '@/modules/code-collabo/styles/modules/careers.module.css';

const CareersPageCodeCollabo: NextPageWithLayout = () => {
  return (
    <div className={careers.container}>Page content area</div>
  );
};

CareersPageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default CareersPageCodeCollabo;
