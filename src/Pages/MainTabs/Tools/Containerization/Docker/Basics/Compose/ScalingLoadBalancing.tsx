import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ScalingLoadBalancing = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Basics/Compose/ScalingLoadBalancing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Scaling / Load Balancing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ScalingLoadBalancing;
