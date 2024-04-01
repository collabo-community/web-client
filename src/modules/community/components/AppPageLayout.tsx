import { ReactElement } from 'react';

import PageLayout from '@/modules/shared/components/PageLayout';
import PageStructure from '@/modules/community/components/AppPageStructure';

export function getCommunityLayout(page: ReactElement) {
  return (
    <PageLayout>
      <PageStructure>{page}</PageStructure>
    </PageLayout>
  );
}