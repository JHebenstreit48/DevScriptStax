import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CLIUsage = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Basics/Workflow/CLIUsage';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CLI Usage" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CLIUsage;
