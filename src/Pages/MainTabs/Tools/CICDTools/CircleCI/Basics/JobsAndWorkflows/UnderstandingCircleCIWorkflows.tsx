import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UnderstandingCircleCIWorkflows = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Basics/JobsAndWorkflows/UnderstandingCircleCIWorkflows';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Understanding CircleCI Workflows" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnderstandingCircleCIWorkflows;
