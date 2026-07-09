import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ExternalDatabases = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Data/ExternalDatabases';

  return (
    <>
      <PageLayout>
        <PageTitle title="External Databases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExternalDatabases;
