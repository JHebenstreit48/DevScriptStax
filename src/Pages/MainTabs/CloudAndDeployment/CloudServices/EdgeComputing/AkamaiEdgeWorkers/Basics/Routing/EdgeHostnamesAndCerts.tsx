import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EdgeHostnamesAndCerts = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Routing/EdgeHostnamesAndCerts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Edge Hostnames & Certs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EdgeHostnamesAndCerts;
