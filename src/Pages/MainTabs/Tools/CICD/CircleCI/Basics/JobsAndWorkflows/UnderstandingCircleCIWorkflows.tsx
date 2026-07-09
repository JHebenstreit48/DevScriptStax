import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UnderstandingCircleCIWorkflows = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Basics/JobsAndWorkflows/UnderstandingCircleCIWorkflows';

  return (
    <>
      <PageLayout>
        <PageTitle title="Understanding CircleCI Workflows" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnderstandingCircleCIWorkflows;
