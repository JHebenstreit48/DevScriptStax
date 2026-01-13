import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Fixtures = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Basics/FixturesAndNetwork/Fixtures';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Fixtures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Fixtures;
