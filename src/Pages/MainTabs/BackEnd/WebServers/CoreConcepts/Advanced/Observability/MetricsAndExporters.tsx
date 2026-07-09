import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MetricsAndExporters = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/Observability/MetricsAndExporters';

  return (
    <>
      <PageLayout>
        <PageTitle title="Metrics & Exporters" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MetricsAndExporters;
