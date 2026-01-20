import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProtectedRoutesAndRoles = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Advanced/SecurityAndAccess/ProtectedRoutesAndRoles';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Protected Routes & Roles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProtectedRoutesAndRoles;
