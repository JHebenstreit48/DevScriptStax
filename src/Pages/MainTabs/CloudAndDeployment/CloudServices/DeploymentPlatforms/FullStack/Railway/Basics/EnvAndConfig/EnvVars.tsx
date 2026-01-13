import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EnvVars = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/EnvAndConfig/EnvVars';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Env Vars (Railway)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvVars;
