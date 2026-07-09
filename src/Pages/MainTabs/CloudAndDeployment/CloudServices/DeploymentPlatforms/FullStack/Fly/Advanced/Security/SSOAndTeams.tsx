import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
