import { NextPageWithLayout } from '@/pages/_app';
import { getLayout_App } from '@/@layout_app/App_Layout';

const ProjectsPage_App: NextPageWithLayout = () => {
  return (
    <>
      {/* project page content was here */}
      <div>Project Page content area</div>
    </>
  );
};

ProjectsPage_App.getLayout = getLayout_App;
export default ProjectsPage_App;
