import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProtectedRoutes = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Advanced/Security/ProtectedRoutes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Protected Routes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProtectedRoutes;
