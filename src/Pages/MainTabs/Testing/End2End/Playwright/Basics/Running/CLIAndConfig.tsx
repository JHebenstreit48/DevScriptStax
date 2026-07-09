import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
