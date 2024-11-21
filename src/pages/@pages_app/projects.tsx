import { NextPageWithLayout } from '@/pages/_app';
import { getLayout_App } from '@/@layout_app/App_Layout';
import ProjectList from '@/@layout_app/components/ProjectList';

const ProjectsPage_App: NextPageWithLayout = () => {
  return (
    <>
      <ProjectList />
    </>
  );
};

ProjectsPage_App.getLayout = getLayout_App;
export default ProjectsPage_App;
