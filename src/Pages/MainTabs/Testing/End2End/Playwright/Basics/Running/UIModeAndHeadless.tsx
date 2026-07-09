import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
