import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VsCypress = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Basics/Fundamentals/VsCypress';

  return (
    <>
      <PageLayout>
        <PageTitle title="vs Cypress" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VsCypress;
