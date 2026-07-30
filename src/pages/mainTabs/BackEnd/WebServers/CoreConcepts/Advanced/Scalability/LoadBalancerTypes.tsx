import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LoadBalancerTypes = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/Scalability/LoadBalancerTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Load Balancer Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LoadBalancerTypes;
