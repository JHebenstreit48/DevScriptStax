import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UIModeAndHeadless = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Basics/Running/UIModeAndHeadless';

  return (
    <>
      <PageLayout>
        <PageTitle title="UI Mode & Headless" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UIModeAndHeadless;
