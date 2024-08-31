import { ReactElement } from 'react';

import PageLayout from '@/@layout_shared/PageLayout';
import PageStructure_App from '@/@layout_app/App_Page';

export function getLayout_App(page: ReactElement) {
  return (
    <PageLayout>
      <PageStructure_App>{page}</PageStructure_App>
    </PageLayout>
  );
}
