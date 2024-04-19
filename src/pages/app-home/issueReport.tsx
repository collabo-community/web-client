import { NextPageWithLayout } from '@/pages/_app';
import { getAppHomeLayout } from '@/modules/app-home/components/AppLayout';
import issue from '@/modules/app-home/styles/modules/issue.module.css';


const IssueReportPage: NextPageWithLayout = () => {
  return (
    <>
      <p className={issue.issuePage}>Issues</p>
    </>
  );
};

IssueReportPage.getLayout = getAppHomeLayout;
export default IssueReportPage;


