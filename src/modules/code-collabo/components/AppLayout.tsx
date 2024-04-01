import { ReactElement } from 'react';

import PageLayout from '@/modules/shared/components/PageLayout';
import PageStructure from '@/modules/code-collabo/components/AppPage';

export function getCodeCollaboSubCommunityLayout(page: ReactElement) {
  return (
    <PageLayout>
      <PageStructure>{page}</PageStructure>
    </PageLayout>
  );
}
