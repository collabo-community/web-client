import { NextPageWithLayout } from '@/pages/_app';
import { getLayout_App } from '@/@layout_app/App_Layout';
import ProjectList from '@/@layout_app/components/ProjectList';
import FiltersComponent from '@/@layout_app/components/FiltersComponent';

import styles from '@/@layout_app/styles/project_page.module.css';
import useScreenDimensions from '@/@library_external/hooks/useScreenDimensions';

const ProjectsPage_App: NextPageWithLayout = () => {
  const  { is_midAndUp_screens }  = useScreenDimensions();
  return (
    <div className={styles.projectPageContainer}>
      {is_midAndUp_screens && <FiltersComponent />}
      <ProjectList />
      {/* Pagination component here */}
    </div>
  );
};

ProjectsPage_App.getLayout = getLayout_App;
export default ProjectsPage_App;
