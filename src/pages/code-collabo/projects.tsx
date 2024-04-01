import { NextPageWithLayout } from '@/pages/_app';
import { getCodeCollaboSubCommunityLayout } from '@/modules/code-collabo/components/AppLayout';

import projects from '@/modules/code-collabo/styles/modules/projects.module.css';
import useScreenDimensions from '@/modules/code-collabo/hooks/useScreenDimensions';

import FiltersComponent from '@/modules/code-collabo/components/Filters';

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
