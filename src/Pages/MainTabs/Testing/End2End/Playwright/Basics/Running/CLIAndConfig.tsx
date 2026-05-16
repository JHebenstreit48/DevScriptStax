import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CLIAndConfig = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Basics/Running/CLIAndConfig';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CLI & Config" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CLIAndConfig;
