import { NextPageWithLayout } from '@/pages/_app';
import { getLayout_App } from '@/@layout_app/App_Layout';

import projects from '@/@layout_app/styles/projects.module.css';
import useScreenDimensions from '@/@module_external/hooks/useScreenDimensions';

import FiltersComponent from '@/@layout_app/components/Filters';

const ProjectsPage_App: NextPageWithLayout = () => {
  const  { is_sm_screen }  = useScreenDimensions();
  return (
    <>
      { !is_sm_screen && (
        <div className='lib__flex-right__md'>
          <FiltersComponent />
        </div>
      )}
      <div className={projects.cardsArea}>
        <span>Project cards content area</span>
      </div>
      { !is_sm_screen && (
        <div className={`${projects.paginationArea} lib_margin-auto__sides`}>
          <span>Pagination</span>
        </div>
      )}
    </>
  );
};

ProjectsPage_App.getLayout = getLayout_App;
export default ProjectsPage_App;
