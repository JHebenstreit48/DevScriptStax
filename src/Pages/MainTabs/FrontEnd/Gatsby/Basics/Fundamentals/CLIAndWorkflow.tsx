import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CLIAndWorkflow = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Basics/Fundamentals/CLIAndWorkflow';

  return (
    <>
      <PageLayout>
        <PageTitle title="CLI & Workflow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CLIAndWorkflow;
