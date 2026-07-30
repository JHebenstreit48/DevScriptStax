import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ServiceVars = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/EnvAndConfig/ServiceVars';

  return (
    <>
      <PageLayout>
        <PageTitle title="Service Vars" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ServiceVars;
