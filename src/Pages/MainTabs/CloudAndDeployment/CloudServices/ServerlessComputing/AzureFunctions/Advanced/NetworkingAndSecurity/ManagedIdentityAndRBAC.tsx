import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ManagedIdentityAndRBAC = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced/NetworkingAndSecurity/ManagedIdentityAndRBAC';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Managed Identity & RBAC" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ManagedIdentityAndRBAC;
