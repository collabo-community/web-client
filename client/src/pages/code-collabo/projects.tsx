import { NextPageWithLayout } from '@/pages/_app';
import { getCodeCollaboSubCommunityLayout } from '@/apps/code-collabo/components/AppPageLayout';

import projects from '@/apps/code-collabo/styles/modules/projects.module.css';
import useScreenDimensions from '@/apps/code-collabo/hooks/useScreenDimensions';

import FiltersComponent from '@/apps/code-collabo/components/Filters';

const ProjectsPageCodeCollabo: NextPageWithLayout = () => {
  const  { isMobile }  = useScreenDimensions();
  return (
    <>
      { !isMobile && (
        <div className='lib__flex-right__md'>
          <FiltersComponent />
        </div>
      )}
      <div className={projects.cardsArea}>
        <span>Project cards content area</span>
      </div>
      { !isMobile && (
        <div className={`${projects.paginationArea} lib_margin-auto__sides`}>
          <span>Pagination</span>
        </div>
      )}
    </>
  );
};

ProjectsPageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default ProjectsPageCodeCollabo;
