import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SecretsAndPermissions = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/SecurityAndAccess/SecretsAndPermissions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Secrets & Permissions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecretsAndPermissions;
