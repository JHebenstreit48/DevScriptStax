import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
