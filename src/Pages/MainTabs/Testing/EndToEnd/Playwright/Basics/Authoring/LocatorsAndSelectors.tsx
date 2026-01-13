import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LocatorsAndSelectors = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Basics/Authoring/LocatorsAndSelectors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Locators & Selectors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LocatorsAndSelectors;
