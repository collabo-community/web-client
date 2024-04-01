import { NextPageWithLayout } from '@/pages/_app';
import { getCustom404Layout } from '@/apps/shared/components/Custom404PageLayout';

const Custom404Page: NextPageWithLayout = () => {
  return (
    <>
      {/* 404 page code resides inside the getCustom404Layout component */}
    </>
  );
};

Custom404Page.getLayout = getCustom404Layout;
export default Custom404Page;
