import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CloudRunInterop = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/Integrations/CloudRunInterop';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cloud Run Interop" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CloudRunInterop;
