import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TeamsAndRoles = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Advanced/TeamsAndSSO/TeamsAndRoles';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Teams & Roles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TeamsAndRoles;
