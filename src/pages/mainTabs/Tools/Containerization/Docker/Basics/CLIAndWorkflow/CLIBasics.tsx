import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CLIBasics = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Basics/CLIAndWorkflow/CLIBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="CLI Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CLIBasics;
