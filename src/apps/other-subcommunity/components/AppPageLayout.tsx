import { ReactElement } from 'react';

import PageLayout from '@/apps/shared/components/PageLayout';
import PageStructure from '@/apps/other-subcommunity/components/AppPageStructure';

export function getOtherSubCommunityLayout(page: ReactElement) {
  return (
    <PageLayout>
      <PageStructure>{page}</PageStructure>
    </PageLayout>
  );
}
