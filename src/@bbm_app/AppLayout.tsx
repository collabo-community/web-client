import { ReactElement } from 'react';

import PageLayout from '@/@bbm_shared/components/PageLayout';
import PageStructure from '@/@bbm_app/AppPage';

export function getCodeCollaboSubCommunityLayout(page: ReactElement) {
  return (
    <PageLayout>
      <PageStructure>{page}</PageStructure>
    </PageLayout>
  );
}
