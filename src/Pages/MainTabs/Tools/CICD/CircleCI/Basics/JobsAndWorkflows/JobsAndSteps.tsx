import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JobsAndSteps = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Basics/JobsAndWorkflows/JobsAndSteps';

  return (
    <>
      <PageLayout>
        <PageTitle title="Jobs & Steps" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JobsAndSteps;
