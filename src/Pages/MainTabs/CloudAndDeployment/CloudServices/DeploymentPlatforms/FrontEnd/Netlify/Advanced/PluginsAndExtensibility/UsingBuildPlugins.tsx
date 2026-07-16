import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UsingBuildPlugins = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Advanced/PluginsAndExtensibility/UsingBuildPlugins';

  return (
    <>
      <PageLayout>
        <PageTitle title="Using Build Plugins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UsingBuildPlugins;
