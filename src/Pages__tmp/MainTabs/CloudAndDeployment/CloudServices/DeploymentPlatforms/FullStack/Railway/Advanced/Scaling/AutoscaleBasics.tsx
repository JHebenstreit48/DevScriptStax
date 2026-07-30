import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AutoscaleBasics = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Scaling/AutoscaleBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Autoscale Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AutoscaleBasics;
