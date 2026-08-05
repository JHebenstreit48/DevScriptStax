import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UIInteractions = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Basics/Authoring/UIInteractions';

  return (
    <>
      <PageLayout>
        <PageTitle title="UI Interactions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UIInteractions;
