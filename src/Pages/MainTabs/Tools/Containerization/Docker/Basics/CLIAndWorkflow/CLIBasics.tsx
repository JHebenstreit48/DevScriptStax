import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CLIBasics = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Basics/CLIAndWorkflow/CLIBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CLI Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CLIBasics;
