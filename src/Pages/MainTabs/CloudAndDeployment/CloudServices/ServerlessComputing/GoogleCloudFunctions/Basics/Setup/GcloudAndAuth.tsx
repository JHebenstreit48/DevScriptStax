import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GcloudAndAuth = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics/Setup/GcloudAndAuth';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="gcloud & Auth" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GcloudAndAuth;
