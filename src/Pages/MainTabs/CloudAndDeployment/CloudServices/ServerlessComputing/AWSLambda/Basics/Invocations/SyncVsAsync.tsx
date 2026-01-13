import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SyncVsAsync = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics/Invocations/SyncVsAsync';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Sync vs Async" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SyncVsAsync;
