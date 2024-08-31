import { ReactElement } from 'react';

import PageLayout from '@/@bbm_shared/components/PageLayout';
import PageStructure from '@/@bbm_community/AppPage';

export function getAppHomeLayout(page: ReactElement) {
  return (
    <PageLayout>
      <PageStructure>{page}</PageStructure>
    </PageLayout>
  );
}