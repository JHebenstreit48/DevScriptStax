import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EdgeHostnamesAndCerts = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Routing/EdgeHostnamesAndCerts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Edge Hostnames & Certs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EdgeHostnamesAndCerts;
