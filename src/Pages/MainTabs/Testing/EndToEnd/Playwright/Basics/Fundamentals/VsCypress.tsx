import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VsCypress = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Basics/Fundamentals/VsCypress';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="vs Cypress" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VsCypress;
