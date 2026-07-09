import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecretsAndEnvironmentConfig = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/PerformanceAndHardening/SecretsAndEnvironmentConfig';

  return (
    <>
      <PageLayout>
        <PageTitle title="Secrets & Environment Config" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecretsAndEnvironmentConfig;
