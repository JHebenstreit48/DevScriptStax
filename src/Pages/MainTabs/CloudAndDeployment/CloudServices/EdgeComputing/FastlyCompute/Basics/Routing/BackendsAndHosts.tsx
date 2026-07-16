import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BackendsAndHosts = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/FastlyCompute/Basics/Routing/BackendsAndHosts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Backends & Hosts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BackendsAndHosts;
