import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APIMocking = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Basics/FixturesAndNetwork/APIMocking';

  return (
    <>
      <PageLayout>
        <PageTitle title="API Mocking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIMocking;
