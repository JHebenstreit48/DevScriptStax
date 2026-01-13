import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecretsAndScanning = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/Security/SecretsAndScanning';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Secrets & Scanning" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecretsAndScanning;
