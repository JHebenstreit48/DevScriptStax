import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
