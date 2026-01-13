import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RetriesAndDLQs = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/Architecture/RetriesAndDLQs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Retries & DLQs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RetriesAndDLQs;
