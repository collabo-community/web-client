import { ReactElement } from 'react';

import PageLayout from '@/apps/shared/components/PageLayout';
import PageStructure from '@/apps/code-collabo/components/AppPageStructure';

export function getCodeCollaboSubCommunityLayout(page: ReactElement) {
  return (
    <PageLayout>
      <PageStructure>{page}</PageStructure>
    </PageLayout>
  );
}
