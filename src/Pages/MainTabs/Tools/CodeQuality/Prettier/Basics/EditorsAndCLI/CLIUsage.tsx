import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CLIUsage = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Basics/EditorsAndCLI/CLIUsage';

  return (
    <>
      <PageLayout>
        <PageTitle title="CLI Usage" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CLIUsage;
