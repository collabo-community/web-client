import { ReactElement } from 'react';

import PageLayout from '@/@module_shared/components/PageLayout';
import PageStructure_App from '@/@layout_app/App_Page';

export function getLayout_App(page: ReactElement) {
  return (
    <PageLayout>
      <PageStructure_App>{page}</PageStructure_App>
    </PageLayout>
  );
}
