import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TestingLocally = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics/LocalDev/TestingLocally';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Testing Locally" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TestingLocally;
