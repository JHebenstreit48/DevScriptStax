import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProtectedRoutesAndRoles = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Advanced/SecurityAndAccess/ProtectedRoutesAndRoles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Protected Routes & Roles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProtectedRoutesAndRoles;
