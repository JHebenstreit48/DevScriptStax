import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
