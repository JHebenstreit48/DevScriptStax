import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CanaryAndAB = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/Workflows/CanaryAndAB';

  return (
    <>
      <PageLayout>
        <PageTitle title="Canary & A/B" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CanaryAndAB;
