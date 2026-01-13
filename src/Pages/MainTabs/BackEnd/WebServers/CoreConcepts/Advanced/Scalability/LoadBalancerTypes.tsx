import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LoadBalancerTypes = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/Scalability/LoadBalancerTypes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Load Balancer Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LoadBalancerTypes;
