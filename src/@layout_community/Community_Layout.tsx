import { ReactElement } from 'react';

import PageLayout from '@/@layout_shared/PageLayout';
import PageStructure_Community from '@/@layout_community/Community_Page';

export function getLayout_Community(page: ReactElement) {
  return (
    <PageLayout>
      <PageStructure_Community>{page}</PageStructure_Community>
    </PageLayout>
  );
}