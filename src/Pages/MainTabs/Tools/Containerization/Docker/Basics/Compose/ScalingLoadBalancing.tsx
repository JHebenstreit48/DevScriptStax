import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ScalingLoadBalancing = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Basics/Compose/ScalingLoadBalancing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Scaling / Load Balancing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ScalingLoadBalancing;
