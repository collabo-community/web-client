import { ReactElement } from 'react';

import PageLayout from '@/@module_shared/components/PageLayout';
import PageStructure_Community from '@/@module_community/Community_Page';

export function getLayout_Community(page: ReactElement) {
  return (
    <PageLayout>
      <PageStructure_Community>{page}</PageStructure_Community>
    </PageLayout>
  );
}