import { ReactElement } from 'react';

import PageLayout from '@/modules/shared/components/PageLayout';
import PageStructure from '@/modules/app-home/components/AppPage';

export function getAppHomeLayout(page: ReactElement) {
  return (
    <PageLayout>
      <PageStructure>{page}</PageStructure>
    </PageLayout>
  );
}