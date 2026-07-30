import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StaticSites = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Services/StaticSitesAndWebServices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Clould Services - Deployment - Render - Static Sites & Web Services" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StaticSites;