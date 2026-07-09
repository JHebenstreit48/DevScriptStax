import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SSOAndTeams = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/Security/SSOAndTeams';

  return (
    <>
      <PageLayout>
        <PageTitle title="SSO & Teams" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SSOAndTeams;
