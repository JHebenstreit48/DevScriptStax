import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CredentialsAndSecrets = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Advanced/Security/CredentialsAndSecrets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Credentials & Secrets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CredentialsAndSecrets;
