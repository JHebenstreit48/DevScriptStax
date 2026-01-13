import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SetupAndInstallation = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/Fundamentals/SetupAndInstallation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Setup & Installation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SetupAndInstallation;
