import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
