import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CachingStrategies = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Advanced/PerformanceAndCaching/CachingStrategies';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Caching Strategies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CachingStrategies;
