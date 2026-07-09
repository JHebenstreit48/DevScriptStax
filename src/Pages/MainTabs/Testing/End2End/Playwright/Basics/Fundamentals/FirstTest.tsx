import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FirstTest = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Basics/Fundamentals/FirstTest';

  return (
    <>
      <PageLayout>
        <PageTitle title="First Test" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FirstTest;
