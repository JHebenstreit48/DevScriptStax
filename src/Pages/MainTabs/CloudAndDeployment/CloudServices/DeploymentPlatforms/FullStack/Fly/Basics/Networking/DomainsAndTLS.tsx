import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DomainsAndTLS = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/Networking/DomainsAndTLS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Domains & TLS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DomainsAndTLS;
