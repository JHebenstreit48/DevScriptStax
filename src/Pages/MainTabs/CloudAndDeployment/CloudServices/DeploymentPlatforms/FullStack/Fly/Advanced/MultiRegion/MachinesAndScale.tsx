import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MachinesAndScale = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/MultiRegion/MachinesAndScale';

  return (
    <>
      <PageLayout>
        <PageTitle title="Machines & Scale" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MachinesAndScale;
