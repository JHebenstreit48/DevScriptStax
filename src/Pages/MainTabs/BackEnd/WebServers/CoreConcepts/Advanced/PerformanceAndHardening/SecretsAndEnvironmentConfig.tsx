import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
