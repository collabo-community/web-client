import { NextPageWithLayout } from '@/pages/_app';
import { GetLayout_Custom404 } from '@/@bbm_shared/components/Custom404_Layout';

const Custom404Page: NextPageWithLayout = () => {
  return (
    <>
      {/* 404 page code resides inside the GetLayout_Custom404 component */}
    </>
  );
};

Custom404Page.getLayout = GetLayout_Custom404;
export default Custom404Page;
