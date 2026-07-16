import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ManagedIdentityAndRBAC = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/AzureFunctions/Advanced/NetworkingAndSecurity/ManagedIdentityAndRBAC';

  return (
    <>
      <PageLayout>
        <PageTitle title="Managed Identity & RBAC" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ManagedIdentityAndRBAC;
