import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecretsAndAccess = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Security/SecretsAndAccess';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Secrets & Access" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecretsAndAccess;
