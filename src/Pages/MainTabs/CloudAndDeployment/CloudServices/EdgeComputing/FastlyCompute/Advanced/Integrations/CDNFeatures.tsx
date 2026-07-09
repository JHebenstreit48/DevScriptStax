import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CDNFeatures = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/Integrations/CDNFeatures';

  return (
    <>
      <PageLayout>
        <PageTitle title="CDN Features" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CDNFeatures;
