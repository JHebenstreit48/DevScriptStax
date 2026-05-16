import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UIInteractions = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Basics/Authoring/UIInteractions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="UI Interactions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UIInteractions;
