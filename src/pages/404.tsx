import { NextPageWithLayout } from '@/pages/_app';
import { GetCustom404Layout } from '@/modules/shared/components/Custom404PageLayout';

const Custom404Page: NextPageWithLayout = () => {
  return (
    <>
      {/* 404 page code resides inside the GetCustom404Layout component */}
    </>
  );
};

Custom404Page.getLayout = GetCustom404Layout;
export default Custom404Page;
