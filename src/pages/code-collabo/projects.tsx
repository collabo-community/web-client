import { NextPageWithLayout } from '@/pages/_app';
import { getCodeCollaboSubCommunityLayout } from '@/@bbm_app/components/AppLayout';

import projects from '@/@bbm_app/styles/modules/projects.module.css';
import useScreenDimensions from '@/@bbm_app/hooks/useScreenDimensions';

import FiltersComponent from '@/@bbm_app/components/Filters';

const ProjectsPageCodeCollabo: NextPageWithLayout = () => {
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

ProjectsPageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default ProjectsPageCodeCollabo;
