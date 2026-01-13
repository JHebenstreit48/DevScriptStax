import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecretsAndPermissions = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/SecurityAndAccess/SecretsAndPermissions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Secrets & Permissions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecretsAndPermissions;
