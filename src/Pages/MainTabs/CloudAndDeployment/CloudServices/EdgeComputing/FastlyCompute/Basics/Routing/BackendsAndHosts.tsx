import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BackendsAndHosts = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics/Routing/BackendsAndHosts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Backends & Hosts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BackendsAndHosts;
