import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LocatorsAndSelectors = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Basics/Authoring/LocatorsAndSelectors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Locators & Selectors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LocatorsAndSelectors;
