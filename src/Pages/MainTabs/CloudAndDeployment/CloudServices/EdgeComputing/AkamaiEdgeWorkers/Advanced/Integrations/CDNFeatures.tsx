import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CDNFeatures = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/Integrations/CDNFeatures';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CDN Features" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CDNFeatures;
