import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TeamsAndRoles = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Advanced/EnterpriseAndTeams/TeamsAndRoles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Teams & Roles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TeamsAndRoles;
