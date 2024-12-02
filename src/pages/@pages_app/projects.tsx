import { NextPageWithLayout } from '@/pages/_app';
import { getLayout_App } from '@/@layout_app/App_Layout';
import ProjectList from '@/@layout_app/components/ProjectList';
import FiltersComponent from '@/@layout_app/components/FiltersComponent';

import styles from '@/@layout_app/styles/project_page.module.css';
// import useScreenDimensions from '@/@library_external/hooks/useScreenDimensions';
import useToggle from '@/@library_external/hooks/useToggle';
// import Overlay from '@/@layout_app/components/Overlay';

const ProjectsPage_App: NextPageWithLayout = () => {
  // const  { is_sm_screen }  = useScreenDimensions();
  const { isFilterOpen, toggleFilter } = useToggle();
  return (
    <div className={styles.projectPageContainer}>
      <FiltersComponent toggleFilter={toggleFilter} isOpen={isFilterOpen} />
      <ProjectList />
      {/* Pagination component here */}
    </div>
  );
};

ProjectsPage_App.getLayout = getLayout_App;
export default ProjectsPage_App;
