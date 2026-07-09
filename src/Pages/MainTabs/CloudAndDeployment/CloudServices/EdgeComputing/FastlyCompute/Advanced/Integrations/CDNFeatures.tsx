import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
