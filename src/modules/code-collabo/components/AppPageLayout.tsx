import { ReactElement } from 'react';

import PageLayout from '@/modules/shared/components/PageLayout';
import PageStructure from '@/modules/code-collabo/components/AppPageStructure';

export function getCodeCollaboSubCommunityLayout(page: ReactElement) {
  return (
    <PageLayout>
      <PageStructure>{page}</PageStructure>
    </PageLayout>
  );
}
