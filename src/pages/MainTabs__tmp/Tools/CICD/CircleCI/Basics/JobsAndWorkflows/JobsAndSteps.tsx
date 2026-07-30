import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
