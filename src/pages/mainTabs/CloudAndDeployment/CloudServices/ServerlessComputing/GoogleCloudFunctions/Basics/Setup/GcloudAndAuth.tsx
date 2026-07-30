import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GcloudAndAuth = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics/Setup/GcloudAndAuth';

  return (
    <>
      <PageLayout>
        <PageTitle title="gcloud & Auth" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GcloudAndAuth;
