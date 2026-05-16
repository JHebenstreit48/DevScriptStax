import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APIMocking = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Basics/FixturesAndNetwork/APIMocking';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="API Mocking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIMocking;
