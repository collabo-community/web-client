import { ReactElement } from 'react';

import PageLayout from '@/apps/shared/components/PageLayout';
import PageStructure from '@/apps/community/components/AppPageStructure';

export function getCommunityLayout(page: ReactElement) {
  return (
    <PageLayout>
      <PageStructure>{page}</PageStructure>
    </PageLayout>
  );
}