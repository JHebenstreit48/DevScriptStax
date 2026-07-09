import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CLIAndConfig = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Basics/Running/CLIAndConfig';

  return (
    <>
      <PageLayout>
        <PageTitle title="CLI & Config" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CLIAndConfig;
