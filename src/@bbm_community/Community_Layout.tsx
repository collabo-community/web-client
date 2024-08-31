import { ReactElement } from 'react';

import PageLayout from '@/@bbm_shared/components/PageLayout';
import PageStructure_Community from '@/@bbm_community/Community_Page';

export function getLayout_Community(page: ReactElement) {
  return (
    <PageLayout>
      <PageStructure_Community>{page}</PageStructure_Community>
    </PageLayout>
  );
}