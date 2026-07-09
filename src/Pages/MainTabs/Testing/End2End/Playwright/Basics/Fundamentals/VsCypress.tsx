import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
