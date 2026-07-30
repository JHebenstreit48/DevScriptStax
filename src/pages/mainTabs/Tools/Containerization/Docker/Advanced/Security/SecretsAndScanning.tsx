import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SecretsAndScanning = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/Security/SecretsAndScanning';

  return (
    <>
      <PageLayout>
        <PageTitle title="Secrets & Scanning" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecretsAndScanning;
