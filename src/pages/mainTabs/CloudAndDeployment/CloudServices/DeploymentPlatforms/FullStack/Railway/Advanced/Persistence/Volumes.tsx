import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Volumes = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Persistence/Volumes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Volumes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Volumes;
